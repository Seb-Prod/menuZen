/**
 * @file Page de documentation et showcase pour le composant Button.
 * @module pages/showcase/ShowcaseChevronIcon
 */

import ChevronIcon from "@/components/ui/ChevronIcon";
import type { JSX } from "react";
import { CHEVRONICON_SHOWCASE_CONSTANTS } from '@/components/ui/ChevronIcon/ChevronIcon.types';
import type { Combination } from "../../utils/showcaseHelpers";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { chevronIconProps, chevroniconUsageExample } from "../../data/ChevronIcon";

type ShowcaseCombo = Combination<typeof CHEVRONICON_SHOWCASE_CONSTANTS>;

/**
 * Génère le rendu visuel du ChevronIcon avec les paramètres sélectionnés.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du ChevronIcon.
 * @returns {JSX.Element} Instance du ChevronIcon avec les props appliquées.
 */
const renderPreview = (combo: ShowcaseCombo): JSX.Element => (
  <ChevronIcon
    type={combo.type}
    isOpen={combo.isOpen}
    size={combo.size}
    variant={combo.variant}
  >
  </ChevronIcon>
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du ChevronIcon.
 * @returns {string} Code TSX formaté représentant le ChevronIcon configuré.
 */
const generateCode = (combo: ShowcaseCombo): string => {
  const propExpressions = [
    combo.type !== "chevron" && `type="${combo.type}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.isOpen !== false && `isOpen`,

  ];

  return generateCodeString("ChevronIcon", propExpressions);
};

/**
 * Composant ShowcaseChevronIcon - Page de documentation du composant ChevronIcon.
 * 
 * Page de showcase complète présentant le composant ChevronIcon avec :
 * - Documentation des props
 * - Exemples d'utilisation
 * - Playground interactif pour tester toutes les variations
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} La page de documentation complète pour ChevronIcon.
 * 
 * @see {@link ChevronIcon}
 * @see {@link DocPageContainer}
 * @see {@link CHEVRONICON_SHOWCASE_CONSTANTS}
 */
const ShowcaseChevronIcon = (): JSX.Element => {
  return (
    <DocPageContainer
      title="ChevronIcon"
      description="Composant **ChevronIcon** indique visuellement l'état de bascule d'un élément (ouvert/fermé) via une **icône animée**. Il supporte différents types d'icônes (chevron, flèche, plus/moins, triangle, etc.) et s'intègre parfaitement aux composants de type accordéon et menus déroulants."
      props={chevronIconProps}
      usageExample={chevroniconUsageExample}
      params={CHEVRONICON_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
    />
  );
};

export default ShowcaseChevronIcon;