/**
 * @file Page de documentation et showcase pour le composant MenuToggle.
 * @module features/documentation/pages/showcase/ShowcaseMenuToggle
 */

import { menuToggleProps, menuToggleUsageExample } from "../../data/MenuToggle";
import { SHOWCASE_CONSTANTS } from "@/components/ui/MenuToggle/MenuToggle.types";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import MenuToggle from "@/components/ui/MenuToggle";

const { renderPreview, generateCode } = createShowcaseFromProps(
  MenuToggle,
  "MenuToggle",
  menuToggleProps
);

const ShowcaseMenuToggle = () => {
  return (
    <DocPageContainer
      title="MenuToggle"
      description={`
Composant **MenuToggle** — Icône animée pour ouvrir ou fermer un menu.  
Il prend en charge plusieurs types d’icônes (**burger**, **flèche**, **chevron**) et anime leur état selon que le menu est **ouvert** ou **fermé**.  
Accessible via les labels \`ariaLabelOpen\` et \`ariaLabelClose\`.
      `}
      props={menuToggleProps}
      usageExample={menuToggleUsageExample}
      params={SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
    />
  );
};

export default ShowcaseMenuToggle;