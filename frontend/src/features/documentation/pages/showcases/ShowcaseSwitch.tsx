/**
 * @file Page de documentation et showcase pour le composant Switch.
 * @module pages/showcase/ShowcaseSwitch
 */

import Switch from "@/components/ui/Switch";
import { useState, type JSX } from "react";
import { SWITCH_SHOWCASE_CONSTANTS } from "@/components/ui/Switch/Switch.types";
import { switchProps, switchUsageExample } from "../../data/Switch";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import type { Combination } from "../../utils/showcaseHelpers";

type ShowcaseCombo = Combination<typeof SWITCH_SHOWCASE_CONSTANTS>;

/**
 * Génération automatique des fonctions de showcase depuis switchProps
 */
const { renderPreview: baseRenderPreview, generateCode } = createShowcaseFromProps(
  Switch,
  "Switch",
  switchProps,
  {
    // Exclure checked et onChange car ils nécessitent un état local
    excludeFromRender: ["checked", "onChange"],
    excludeFromCode: ["checked", "onChange"]
  }
);

/**
 * Wrapper avec état local pour gérer le checked du Switch.
 * Nécessaire car Switch est un composant contrôlé.
 */
const renderPreview = (combo: ShowcaseCombo): JSX.Element => {
  // Composant wrapper avec hook
  const PreviewWithState = (): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);
    
    // Récupère le rendu de base
    const baseElement = baseRenderPreview(combo);
    
    // Ajoute les props d'état
    return (
      <Switch
        {...baseElement.props}
        checked={isChecked}
        onChange={(checked) => setIsChecked(checked)}
      />
    );
  };

  return <PreviewWithState />;
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