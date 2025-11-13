/**
 * @file Définition des propriétés du composant Input
 * @module components/ui/Input/props
 * @description
 * Documentation des props pour le showcase du composant Input.
 * Ce fichier décrit chaque propriété avec ses métadonnées pour 
 * la génération automatique de documentation et les outils de développement.
 * 
 * @version 1.0.0
 * @since 2025-11-13
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Input} pour l'implémentation du composant
 */

import { DEFAULTS, TYPES } from "@/components/ui/Input";
import type { PropInfo } from "@/features/documentation/types/types";
import { formatType } from "../../utils";
import { UI_SIZES, UI_VARIANTS } from "@/components/ui/ui.types";

/**
 * Métadonnées complètes des propriétés du composant Input.
 * Chaque propriété est documentée avec son type, sa valeur par défaut,
 * une description détaillée et son caractère obligatoire ou optionnel.
 * 
 * @constant
 * @type {readonly PropInfo[]}
 */
export const props: readonly PropInfo[] = [
  {
    name: "type",
    type: formatType(TYPES),
    default: `"${DEFAULTS.type}"`,
    description: "**Type de champ de saisie**. Détermine le type d'input HTML et le comportement du clavier sur mobile (numérique pour 'tel', email pour 'email', etc.).",
    required: false,
  },
  {
    name: "size",
    type: formatType(UI_SIZES),
    default: `"${DEFAULTS.size}"`,
    description: "**Taille de l'input**. Contrôle la hauteur, le padding et la taille de police du champ de saisie selon le système de design.",
    required: false,
  },
  {
    name: "variant",
    type: formatType(UI_VARIANTS),
    default: `"${DEFAULTS.variant}"`,
    description: "**Variante de couleur** appliquée au texte et à la bordure de l'input. Permet d'adapter visuellement l'input au contexte (succès, erreur, etc.).",
    required: false,
  },
  {
    name: "value",
    type: "string",
    default: `"${DEFAULTS.value}"`,
    description: "**Valeur contrôlée de l'input**. Pour une gestion en mode contrôlé (controlled component), cette prop doit être utilisée avec un gestionnaire `onChange`.",
    required: false,
  },
  {
    name: "placeholder",
    type: "string",
    default: `"${DEFAULTS.placeholder}"`,
    description: "**Texte indicatif** affiché lorsque l'input est vide. Aide l'utilisateur à comprendre quel type de données saisir sans occuper d'espace supplémentaire.",
    required: false,
  },
] as const;