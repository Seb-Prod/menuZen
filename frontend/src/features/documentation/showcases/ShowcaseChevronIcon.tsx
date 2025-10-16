import ChevronIcon from "@/components/ui/ChevronIcon";
import type { JSX } from "react";
import type { Combination } from "../utils/showcaseHelpers";
import { CHEVRONICON_SHOWCASE_CONSTANTS } from '@/components/ui/ChevronIcon/ChevronIcon.types';
import { chevroniconProps, chevroniconUsageExample } from "./data/ChevronIcon";
import { generateCodeString } from "../utils";
import { ShowcaseComponent } from "../doc-blocks";

type ChevronIconShowcaseCombo = Combination<typeof CHEVRONICON_SHOWCASE_CONSTANTS>;

const renderChevronIconPreview = (combo: ChevronIconShowcaseCombo): JSX.Element => (
  <ChevronIcon
    type={combo.type}
    isOpen={combo.isOpen}
    size={combo.size}
    colorStyle={combo.colorStyle}
  >
  </ChevronIcon>
);

const generateChevronIconCode = (combo: ChevronIconShowcaseCombo): string => {
  const propExpressions = [
    combo.type !== "chevron" && `type="${combo.type}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.colorStyle !== "primary" && `colorStyle"${combo.colorStyle}"`,
    combo.isOpen !== false && `isOpen`,

  ];

  return generateCodeString("ChevronIcon", propExpressions, false);
};

const ShowcaseChevronIcon = (): JSX.Element => {
  return (
    <ShowcaseComponent
      title="ChevronIcon"
      description="Le composant ChevronIcon est un composant React réutilisable qui affiche différents types d'icônes animées. Il prend en charge les icônes chevron, flèche, plus/moins, triangle et points. L'apparence de l'icône peut être personnalisée en fonction du type, de la taille, de la couleur et de l'état ouvert/fermé.

Le composant ChevronIcon est souvent utilisé dans les accordéons et menus déroulants pour indiquer l'état ouverte/fermée d'un élément, mais il peut également être utilisé à d'autres fins où une icône animée est requise."
      propsData={chevroniconProps}
      usageExample={chevroniconUsageExample}
      params={CHEVRONICON_SHOWCASE_CONSTANTS}
      renderPreview={renderChevronIconPreview}
      generateCode={generateChevronIconCode}
    />
  );
};

export default ShowcaseChevronIcon;