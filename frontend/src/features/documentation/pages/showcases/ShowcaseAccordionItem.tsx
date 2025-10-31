/**
 * @file Page de documentation et showcase pour le composant AccordionItem.
 * @module pages/showcase/ShowcaseAccordionItem
 */


import type { JSX } from "react";
import { accordionItemProps } from "../../data/Accordion";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import type { ShowcaseProps } from "../../types/types";


/**
 * Page de documentation interactive pour le composant AccordionItem.
 */
const ShowcaseAccordionSection = ({ onNavigate }: ShowcaseProps): JSX.Element => {
  return (
    <DocPageContainer
      title="AccordionItem"
      description="Composant **AccordionSection** - Ce composant représente un élément interactif (bouton) généralement utilisé à l'intérieur d'une `AccordionSection`. Il peut afficher un label et réagir au clic. Les styles sont hérités du contexte."
      props={accordionItemProps}
      links={["Accordion", "AccordionSection"]}
      onNavigate={onNavigate}
    />
  );
};

export default ShowcaseAccordionSection;