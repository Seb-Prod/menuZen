/**
 * @file Factory pour générer automatiquement les fonctions de showcase
 * @module utils/showcaseFactory
 */

import { createElement } from "react";
import type { JSX, ComponentType } from "react";
import type { Combination, Params } from "./showcaseHelpers";
import type { PropInfo } from "@/features/documentation/types/types";
import { generateCodeString } from "./index";

/**
 * Extrait automatiquement la config depuis les PropInfo
 */
function extractDefaultsFromProps(props: readonly PropInfo[]): Record<string, string | number | boolean> {
  return props.reduce<Record<string, string | number | boolean>>((acc, prop) => {
    if (prop.default !== undefined && prop.default !== "undefined") {
      let value: string | number | boolean = prop.default;
      
      if (typeof value === "string") {
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        
        if (value === "true") {
          value = true;
        } else if (value === "false") {
          value = false;
        }
      }
      
      acc[prop.name] = value;
    }
    return acc;
  }, {});
}

/**
 * Identifie les props booléennes depuis les PropInfo
 */
function extractBooleanProps(props: readonly PropInfo[]): string[] {
  return props
    .filter(prop => prop.type === "boolean")
    .map(prop => prop.name);
}

/**
 * Identifie les props à exclure du rendu (événements, className, etc.)
 */
function getExcludedRenderProps(props: readonly PropInfo[]): string[] {
  return props
    .filter(prop => 
      prop.name === "children" || 
      prop.name === "className" ||
      prop.type.includes("=>") || 
      prop.type === "ReactNode"
    )
    .map(prop => prop.name);
}

/**
 * Options de configuration pour createShowcaseFromProps
 */
interface ShowcaseOptions {
  /** Contenu par défaut du composant (converti en string pour le code) */
  defaultChildren?: string;
  /** Props supplémentaires à exclure du code généré */
  excludeFromCode?: string[];
  /** Props supplémentaires à exclure du rendu */
  excludeFromRender?: string[];
  /** Formatage custom pour certaines props */
  formatters?: Record<string, (value: unknown) => string | false>;
  /** Props additionnelles à injecter dans le rendu */
  additionalRenderProps?: Record<string, unknown>;
  /** Props additionnelles à injecter dans le code généré */
  additionalCodeProps?: Record<string, string>;
}

/**
 * Type de retour pour les fonctions de showcase
 */
interface ShowcaseFunctions<TConstants extends Params> {
  renderPreview: (combo: Combination<TConstants>) => JSX.Element;
  generateCode: (combo: Combination<TConstants>) => string;
}

/**
 * Crée automatiquement les fonctions de showcase depuis les PropInfo
 */
export function createShowcaseFromProps<TConstants extends Params>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>,
  componentName: string,
  propInfos: readonly PropInfo[],
  options: ShowcaseOptions = {}
): ShowcaseFunctions<TConstants> {
  const defaults = extractDefaultsFromProps(propInfos);
  const booleanProps = extractBooleanProps(propInfos);
  const autoExcludedRender = getExcludedRenderProps(propInfos);
  const excludeFromRender = [
    ...autoExcludedRender,
    ...(options.excludeFromRender || [])
  ];
  const excludeFromCode = [
    "children",
    "className",
    ...(options.excludeFromCode || [])
  ];

  const renderPreview = (combo: Combination<TConstants>): JSX.Element => {
    const props = Object.keys(combo).reduce<Record<string, unknown>>((acc, key) => {
      if (!excludeFromRender.includes(key)) {
        acc[key] = combo[key as keyof TConstants];
      }
      return acc;
    }, {});

    // Ajoute les props additionnelles
    const finalProps = {
      ...props,
      ...options.additionalRenderProps
    };

    return createElement(
      component,
      finalProps,
      options.defaultChildren ?? "Example"
    );
  };

  const generateCode = (combo: Combination<TConstants>): string => {
    const propExpressions = Object.keys(combo)
      .filter(key => !excludeFromCode.includes(key))
      .map((key) => {
        const value = combo[key as keyof TConstants];
        const defaultValue = defaults[key];

        if (value === defaultValue) {
          return false;
        }

        if (options.formatters?.[key]) {
          return options.formatters[key](value);
        }

        if (booleanProps.includes(key)) {
          return value ? key : false;
        }

        return `${key}="${value}"`;
      })
      .filter(Boolean);

    // Ajoute les props additionnelles au code
    if (options.additionalCodeProps) {
      Object.values(options.additionalCodeProps).forEach((value) => {
        propExpressions.push(value);
      });
    }

    return generateCodeString(
      componentName,
      propExpressions as (string | false)[],
      options.defaultChildren
    );
  };

  return { renderPreview, generateCode };
}