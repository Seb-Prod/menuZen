/**
 * @file Page de documentation et showcase pour le composant Spinner.
 * @module pages/showcase/ShowcaseSpinner
 */

import Spinner from "@/components/ui/Spinner";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { SPINNER_SHOWCASE_CONSTANTS } from "@/components/ui/Spinner/Spinner.types";
import { spinnerProps, spinnerUsageExample } from "../../data/Spinner";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

type ShowcaseSpinnerCombo = Combination<typeof SPINNER_SHOWCASE_CONSTANTS>;

/**
 * Génère le rendu visuel du Spinner avec les paramètres sélectionnés.
 * 
 * @param {ShowcaseSpinnerCombo} combo - Combinaison des props du Spinner.
 * @returns {JSX.Element} Instance du Spinner avec les props appliquées.
 */
const renderPreview = (combo: ShowcaseSpinnerCombo): JSX.Element => (
  <Spinner
    variant={combo.variant}
    size={combo.size}
    align={combo.align}
  />
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 * 
 * @param {ShowcaseSpinnerCombo} combo - Combinaison des props du Spinner.
 * @returns {string} Code TSX formaté représentant le Spinner configuré.
 */
const generateCode = (combo: ShowcaseSpinnerCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.align !== "center" && `align="${combo.align}"`,
  ];

  return generateCodeString("Spinner", propExpressions);
};

/**
 * Composant ShowcaseSpinner - Page de documentation du composant Spinner.
 * 
 * Page de showcase complète présentant le composant Spinner avec :
 * - Documentation des props
 * - Exemples d'utilisation
 * - Playground interactif pour tester toutes les variations
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} La page de documentation complète pour Spinner.
 * 
 * @see {@link Spinner}
 * @see {@link DocPageContainer}
 * @see {@link SPINNER_SHOWCASE_CONSTANTS}
 */
const ShowcaseSpinner = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Spinner"
      description="Indicateur de chargement rotatif avec différentes tailles, variantes de couleur et options d'alignement."
      usageExample={spinnerUsageExample}
      params={SPINNER_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={spinnerProps}
    />
  );
};

export default ShowcaseSpinner;