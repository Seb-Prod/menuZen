/**
 * @file Définition des propriétés du composant Footer
 * @module components/ui/layout/Footer/props
 * @description
 * Documentation des props pour le showcase du composant Footer
 * 
 * @version 1.0.0
 * @since 2025-11-13
 * @author Seb-Prod
 * 
 * @see {@link PropInfo} pour la structure des métadonnées
 * @see {@link Footer} pour l'implémentation du composant
 */

import { DEFAULTS } from "@/components/layout/Footer";
import type { PropInfo } from "@/features/documentation/types/types";

export const props: readonly PropInfo[] = [
  {
    name: "appName",
    type: "string",
    default: `"${DEFAULTS.appName}"`,
    description: "**Nom de l'application** affiché dans le pied de page.",
    required: false,
  },
  {
    name: "description",
    type: "string",
    default: `"${DEFAULTS.description}"`,
    description: "**Description brève** de l'application ou du projet.",
    required: false,
  },
  {
    name: "email",
    type: "string",
    default: undefined,
    description: "**Adresse email de contact** pour le pied de page.",
    required: false,
  },
  {
    name: "linkedIn",
    type: "string",
    default: undefined,
    description: "**URL du profil LinkedIn** de l'auteur ou de l'entreprise.",
    required: false,
  },
  {
    name: "GitHub",
    type: "string",
    default: undefined,
    description: "**URL du profil GitHub** du projet ou de l'auteur.",
    required: false,
  },
  {
    name: "year",
    type: "number",
    default: undefined,
    description: "**Année** utilisée pour la mention de copyright. Si non spécifiée, l'année courante pourrait être utilisée dans l'implémentation du composant.",
    required: false,
  },
] as const;