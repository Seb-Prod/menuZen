/**
 * @file Page de documentation et showcase pour le composant Button.
 * @module pages/showcase/ShowcaseButton
 */

import Button from "@/components/ui/Button";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { BUTTON_SHOWCASE_CONSTANTS } from '@/components/ui/Button/Button.types';
import { buttonProps, buttonUsageExample } from "../../data/Button";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

type ShowcaseCombo = Combination<typeof BUTTON_SHOWCASE_CONSTANTS>;

/**
 * Génère le rendu visuel du Button avec les paramètres sélectionnés.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Button.
 * @returns {JSX.Element} Instance du Button avec les props appliquées.
 */
const renderPreview = (combo: ShowcaseCombo): JSX.Element => (
  <Button
    variant={combo.variant}
    size={combo.size}
    type={combo.type}
    fullWidth={combo.fullWidth}
    disabled={combo.disabled}
    align={combo.align}
  >
    Example
  </Button>
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Button.
 * @returns {string} Code TSX formaté représentant le Button configuré.
 */
const generateCode = (combo: ShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.type !== "button" && `type="${combo.type}"`,
    combo.align !== "left" && `align="${combo.align}"`,
    combo.fullWidth && 'fullWidth',
    combo.disabled && 'disabled',
  ];

  return generateCodeString("Button", propExpressions);
};

/**
 * Composant ShowcaseButton - Page de documentation du composant Button.
 * 
 * Page de showcase complète présentant le composant Button avec :
 * - Documentation des props
 * - Exemples d'utilisation
 * - Playground interactif pour tester toutes les variations
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} La page de documentation complète pour Button.
 * 
 * @see {@link Button}
 * @see {@link DocPageContainer}
 * @see {@link BUTTON_SHOWCASE_CONSTANTS}
 */
const ShowcaseButton = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Button"
      description="Composant **Button** personnalisable avec différentes variantes, tailles et options d'affichage."
      usageExample={buttonUsageExample}
      params={BUTTON_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={buttonProps}
    />
  );
};

export default ShowcaseButton;