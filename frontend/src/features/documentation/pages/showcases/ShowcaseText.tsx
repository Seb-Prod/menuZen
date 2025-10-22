/**
 * @file Page de documentation et showcase pour le composant Text.
 * @module pages/showcase/ShowcaseText
 */

import Text from "@/components/ui/Text";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { TEXT_SHOWCASE_CONSTANTS } from '@/components/ui/Text/Text.types';
import { textProps, textUsageExample } from "../../data/Text";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

type ShowcaseCombo = Combination<typeof TEXT_SHOWCASE_CONSTANTS>;

/**
 * Génère le rendu visuel du Text avec les paramètres sélectionnés.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Text.
 * @returns {JSX.Element} Instance du Text avec les props appliquées.
 */
const renderPreview = (combo: ShowcaseCombo): JSX.Element => (
  <Text
    as={combo.as}
    variant={combo.variant}
    size={combo.size}
    weight={combo.weight}
    justify={combo.justify}
  >
    Example
  </Text>
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Text.
 * @returns {string} Code TSX formaté représentant le Text configuré.
 */
const generateCode = (combo: ShowcaseCombo): string => {
  const propExpressions = [
    combo.as !== "span" && `as="${combo.as}"`,
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "md" && `size="${combo.size}"`,
    combo.weight !== "regular" && `weight="${combo.weight}"`,
    combo.justify !== "left" && `align="${combo.justify}"`,
  ];

  return generateCodeString("Text", propExpressions);
};

/**
 * Composant ShowcaseText - Page de documentation du composant Text.
 * 
 * Page de showcase complète présentant le composant Text avec :
 * - Documentation des props
 * - Exemples d'utilisation
 * - Playground interactif pour tester toutes les variations
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-22
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} La page de documentation complète pour Text.
 * 
 * @see {@link Text}
 * @see {@link DocPageContainer}
 * @see {@link TEXT_SHOWCASE_CONSTANTS}
 */
const ShowcaseText = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Text"
      description="Composant **Text** personnalisable avec différentes balises sémantiques, couleurs, tailles, poids et alignements."
      usageExample={textUsageExample}
      params={TEXT_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={textProps}
    />
  );
};

export default ShowcaseText;