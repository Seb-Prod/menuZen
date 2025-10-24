/**
 * @file Page de documentation et showcase pour le composant Switch.
 * @module pages/showcase/ShowcaseSwitch
 */

import Switch from "@/components/ui/Switch";
import { useState, type JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { SWITCH_SHOWCASE_CONSTANTS } from "@/components/ui/Switch/Switch.types";
import { switchProps, switchUsageExample } from "../../data/Switch";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";

type ShowcaseCombo = Combination<typeof SWITCH_SHOWCASE_CONSTANTS>;

/**
 * Composant de prévisualisation du Switch avec les paramètres sélectionnés.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Switch.
 * @returns {JSX.Element} Instance du Switch avec les props appliquées.
 */
const RenderPreview = ({ combo }: { combo: ShowcaseCombo }): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      variant={combo.variant}
      labelColor={combo.labelColor}
      size={combo.size}
      align={combo.align}
      checked={isChecked}
      onChange={(checked) => setIsChecked(checked)}
    />
  );
};

/**
 * Fonction wrapper pour le rendu du preview.
 */
const renderPreview = (combo: ShowcaseCombo): JSX.Element => (
  <RenderPreview combo={combo} />
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Switch.
 * @returns {string} Code TSX formaté représentant le Switch configuré.
 */
const generateCode = (combo: ShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.align !== "center" && `align="${combo.align}"`,
    combo.labelColor !== "primary" && `labelColor="${combo.labelColor}"`,
  ];

  return generateCodeString("Switch", propExpressions);
};

/**
 * Composant ShowcaseSwitch - Page de documentation du composant Switch.
 * 
 * Page de showcase complète présentant le composant Switch avec :
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
      title="Switch"
      description="Composant **Switch** - Interrupteur à bascule permettant d'activer ou désactiver une option. Idéal pour les paramètres, préférences utilisateur et états binaires avec retour visuel immédiat."
      usageExample={switchUsageExample}
      params={SWITCH_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={switchProps}
    />
  );
};

export default ShowcaseSwitch;