/**
 * @file Page de documentation et showcase pour le composant Heading.
 * @module features/documentation/pages/showcase/ShowcaseHeading
 */

import Heading from "@/components/ui/Heading";
import { headingProps, headingUsageExample } from "../../data/Heading";
import type { Combination } from "../../utils/showcaseHelpers";
import { HEADING_SHOWCASE_CONSTANTS } from "@/components/ui/Heading/Heading.types";
import type { JSX } from "react";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

type ShowcaseCombo = Combination<typeof HEADING_SHOWCASE_CONSTANTS>;

/**
 * Génère le rendu visuel du Heading avec les paramètres sélectionnés.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Heading.
 * @returns {JSX.Element} Instance du Heading avec les props appliquées.
 */
const renderPreview = (combo: ShowcaseCombo): JSX.Element => (
  <Heading
    variant={combo.variant}
    as={combo.as}
    justify={combo.justify}
  >
    Exemple de titre
  </Heading>
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Heading.
 * @returns {string} Code TSX formaté représentant le Heading configuré.
 */
const generateCode = (combo: ShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant={${combo.variant}}`,
    combo.as !== 'h1' && `as="${combo.as}"`,
    combo.justify !== 'left' && `justify="${combo.justify}"`
  ];

  return generateCodeString("Heading", propExpressions);
};

/**
 * Composant ShowcaseHeading - Page de documentation du composant Heading.
 * 
 * Page de showcase complète présentant le composant Heading avec :
 * - Documentation des props
 * - Exemples d'utilisation
 * - Playground interactif pour tester toutes les variations
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} La page de documentation complète pour Heading.
 * 
 * @see {@link Heading}
 * @see {@link DocPageContainer}
 * @see {@link HEADING_SHOWCASE_CONSTANTS}
 */
const ShowcaseHeading = () => {
  return (
    <DocPageContainer
      title="Heading"
      description="Composant **Heading** personnalisable avec différents niveaux sémantiques, couleurs et options d'alignement."
      props={headingProps}
      usageExample={headingUsageExample}
      params={HEADING_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
    />
  );
};

export default ShowcaseHeading;