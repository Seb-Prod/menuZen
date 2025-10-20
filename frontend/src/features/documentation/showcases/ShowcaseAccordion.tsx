import type { JSX } from "react";
import DocPageContainer from "../doc-blocks/DocPageContainer/DocPageContainer";
import { Accordion, AccordionItem, AccordionSection } from "@/components/ui/Accordion";
import { DocProps} from "../doc-blocks";
import { accordionItemProps, accordionProps, accordionSectionProps, accordionUsageExample } from "./data/Accordion";
import type { Combination } from "../utils/showcaseHelpers";
import { generateCodeString } from "../utils";
import { ACCORDION_SHOWCASE_CONSTANTS } from "@/components/ui/Accordion/Accordion.types";


type ShowcaseCombo = Combination<typeof ACCORDION_SHOWCASE_CONSTANTS>;

const renderPreview = (combo: ShowcaseCombo): JSX.Element => (
  <Accordion 
    variant={combo.variant} 
    size={combo.size}
    chevronIcon={combo.chevronIcon}
    itemVariant={combo.itemVariant}
  >
    <AccordionSection label="section 1">
      <AccordionItem label="bouton 1"/>
      <AccordionItem label="bouton 2"/>
    </AccordionSection>
    <AccordionSection label="section 2">
      <AccordionItem label="bouton 1"/>
      <AccordionItem label="bouton 2"/>
    </AccordionSection>
  </Accordion>
);

const generateCode = (combo: ShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
  ];

  // Génère un Accordion avec une section et un item imbriqués
  return generateCodeString(
    "Accordion",
    propExpressions,
    [
      generateCodeString(
        "AccordionSection",
        ['label="section 1"'],
        [
          generateCodeString(
            "AccordionItem",
            ['label="bouton 1"']
          ),
        ]
      ),
    ]
  );
};

const ShowcaseAccordion = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Système Accordéon"
      description={`Un composant **Accordion** permet d'organiser du contenu en sections repliables. Il est particulièrement utile pour afficher de grandes quantités d'informations de manière structurée et accessible, comme des FAQ, des menus de navigation ou des panneaux de configuration.`}
      usageExample={accordionUsageExample}
      params={ACCORDION_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}

    >
        <AccordionSection label="Props Accordion (Conteneur Principal)" defaultOpen={true}>
          <DocProps 
          props={accordionProps} 
          description="**Accordion** est le conteneur racine. Il est responsable de l'établissement du style global et de la cohérence visuelle. Il transmet des propriétés de style globales (**`variant`**, **`size`**, **`chevronIcon`**, **`itemVariant`**) à tous ses descendants (`AccordionSection` et `AccordionItem`)."/>
        </AccordionSection>
        <AccordionSection label="Props AccordionSection (Section Repliable)" defaultOpen={true}>
          <DocProps
            props={accordionSectionProps}
            description="**AccordionSection** est le bloc structurel repliable de l'accordéon. Il contient le contenu (**`children`**) et son en-tête cliquable (**`label`**). Il hérite des styles globaux du parent `Accordion` mais permet des **surcharges individuelles** (ex: `variant`, `size`, `chevronIcon`) pour personnaliser l'apparence de cette section spécifique."/>
        </AccordionSection>
        <AccordionSection label="Props AccordionItem (Élément Interactif)" defaultOpen={true}>
          <DocProps
            props={accordionItemProps}
            description="**AccordionItem** représente un élément interactif final (bouton ou lien) dans le panneau d'une section. Il gère son propre état **`isActive`** pour le surlignage, gère les interactions utilisateur (**`onClick`**) et hérite des propriétés de style (notamment **`itemVariant`** pour l'état actif) qui peuvent être surchargées si nécessaire."/>
        </AccordionSection>
        
    </DocPageContainer>
  );
};

export default ShowcaseAccordion;