/**
 * @file Page de documentation et showcase pour le composant Switch.
 * @module pages/showcase/ShowcaseSwitch
 */

import Switch from "@/components/ui/Switch";
import { type JSX } from "react";
import { SHOWCASE_CONSTANTS } from "@/components/ui/Switch/Switch.types";
import { switchProps, switchUsageExample } from "../../data/Switch";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";

const {renderPreview, generateCode} = createShowcaseFromProps(
  Switch,
  "Switch",
  switchProps
)

const ShowcaseSwitch = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Switch"
      description="Composant **Switch** - Interrupteur à bascule permettant d'activer ou désactiver une option. Idéal pour les paramètres, préférences utilisateur et états binaires avec retour visuel immédiat."
      usageExample={switchUsageExample}
      params={SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={switchProps}
    />
  );
};

export default ShowcaseSwitch;