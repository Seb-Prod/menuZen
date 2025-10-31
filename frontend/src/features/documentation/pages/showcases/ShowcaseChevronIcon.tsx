/**
 * @file Page de documentation et showcase pour le composant ChevronIcon.
 * @module pages/showcase/ShowcaseChevronIcon
 */

import ChevronIcon from "@/components/ui/ChevronIcon";
import type { JSX } from "react";
import { SHOWCASE_CONSTANTS } from '@/components/ui/ChevronIcon/ChevronIcon.types';
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { chevronIconProps, chevroniconUsageExample } from "../../data/ChevronIcon";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";

const { renderPreview, generateCode } = createShowcaseFromProps(
  ChevronIcon,
  "ChevronIcon",
  chevronIconProps,
);

const ShowcaseChevronIcon = (): JSX.Element => {
  return (
    <DocPageContainer
      title="ChevronIcon"
      description="Composant **ChevronIcon** indique visuellement l'état de bascule d'un élément (ouvert/fermé) via une **icône animée**. Il supporte différents types d'icônes (chevron, flèche, plus/moins, triangle, etc.) et s'intègre parfaitement aux composants de type accordéon et menus déroulants."
      props={chevronIconProps}
      usageExample={chevroniconUsageExample}
      params={SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
    />
  );
};

export default ShowcaseChevronIcon;