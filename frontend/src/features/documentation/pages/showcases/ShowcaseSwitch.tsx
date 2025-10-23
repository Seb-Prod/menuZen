/**
 * @file Page de documentation et showcase pour le composant Switch.
 * @module pages/showcase/ShowcaseSwitch
 */

import Switch from "@/components/ui/Switch";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { SWITCH_SHOWCASE_CONSTANTS } from "@/components/ui/Switch/Switch.types";
import { switchProps, switchUsageExample } from "../../data/Switch";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

type ShowcaseCombo = Combination<typeof SWITCH_SHOWCASE_CONSTANTS>;

/**
 * Génère le rendu visuel du Spinner avec les paramètres sélectionnés.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Switch.
 * @returns {JSX.Element} Instance du Switch avec les props appliquées.
 */
const renderPreview = (combo: ShowcaseCombo): JSX.Element => (
  <Switch
    variant={combo.variant}
    size={combo.size}
    align={combo.align}
  />
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Spinner.
 * @returns {string} Code TSX formaté représentant le Spinner configuré.
 */
const generateCode = (combo: ShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.align !== "center" && `align="${combo.align}"`,
  ];

  return generateCodeString("Switch", propExpressions);
};

/**
 * Composant ShowcaseSwitch - Page de documentation du composant Switch.
 * 
 * Page de showcase complète présentant le composant Spinner avec :
 * - Documentation des props
 * - Exemples d'utilisation
 * - Playground interactif pour tester toutes les variations
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-23
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} La page de documentation complète pour Switch.
 * 
 * @see {@link Switch}
 * @see {@link DocPageContainer}
 * @see {@link SWITCH_SHOWCASE_CONSTANTS}
 */
const ShowcaseSwitch = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Spinner"
      description="Composant **Switch** lorem."
      usageExample={switchUsageExample}
      params={SWITCH_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={switchProps}
    />
  );
};

export default ShowcaseSwitch;