/**
 * @file Composant DocPageContainer - Conteneur principal des pages de documentation.
 * @module features/documentation/doc-blocks/DocPageContainer
 */

import { useState, type JSX, type ReactNode } from "react";
import styles from './DocPageContainer.module.css';
import DocHeader from "../DocHeader/DocHeader";
import { Accordion, AccordionSection } from "@/components/ui/Accordion";
import UsageExample from "../UsageExample";
import type { Combination, Params } from "../../utils/showcaseHelpers";
import ComponentPlayground from "../ComponentPlayground";
import { DocProps } from '..';
import type { PropInfo } from "../../types/types";
import SeeDocumentationLink from "../../components/SeeDocumentationLink/SeeDocumentationLink";

type DocPageContainerProps<T extends Params> = {
  /** Titre de la page de documentation. */
  title: string;
  /** Description au format Markdown affichée sous le titre. */
  description: string;
  /** Contenu personnalisé à insérer dans l'accordion (remplace la section Props par défaut). */
  children?: ReactNode;
  /** Code d'exemple d'utilisation du composant au format string. */
  usageExample?: string;
  /** Objet définissant les paramètres de variation et leurs valeurs possibles. */
  params?: T;
  /** Fonction retournant le JSX du composant à prévisualiser. */
  renderPreview?: (combo: Combination<T>) => JSX.Element;
  /** Fonction générant le code TSX correspondant aux paramètres. */
  generateCode?: (combo: Combination<T>) => string;
  /** Liste des propriétés du composant à documenter dans le tableau. */
  props?: readonly PropInfo[];
  /** Liste de liens vers d'autres pages de documentation (nom du composant cible). */
  links?: string[];
  /** Fonction appelée lors du clic sur un lien de documentation. */
  onNavigate?: (key: string) => void;
};

/**
 * Composant DocPageContainer - Structure de page de documentation complète.
 */
const DocPageContainer = <T extends Params>({
  title,
  description,
  usageExample,
  children,
  params,
  props,
  renderPreview,
  generateCode,
  links,
  onNavigate
}: DocPageContainerProps<T>): JSX.Element => {
  const initialParams = params
    ? (Object.fromEntries(
        Object.keys(params).map((key) => [key, params[key][0]])
      ) as Combination<T>)
    : ({} as Combination<T>);

  const [selectedParams, setSelectedParams] =
    useState<Combination<T>>(initialParams);

  return (
    <div className={styles.container}>
      <DocHeader title={title} description={description} />
      <hr />
      <Accordion variant="info">
        {children}
        {!children && props && (
          <AccordionSection label="Props" defaultOpen>
            <DocProps props={props} />
          </AccordionSection>
        )}
        {usageExample && (
          <AccordionSection label="Example d'utilisation">
            <UsageExample code={usageExample} />
          </AccordionSection>
        )}
        {renderPreview && generateCode && (
          <AccordionSection label="Playground interactif" defaultOpen>
            <ComponentPlayground
              params={params}
              renderPreview={renderPreview}
              selectedParams={selectedParams}
              setSelectedParams={setSelectedParams}
              generateCode={generateCode}
            />
          </AccordionSection>
        )}
      </Accordion>

      {links && onNavigate && (
        <>
          {links.map((link) => (
            <SeeDocumentationLink
              key={link}
              target={link}
              onNavigate={() => onNavigate(link)}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default DocPageContainer;