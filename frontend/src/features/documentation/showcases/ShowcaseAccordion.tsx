
import type { JSX } from "react";
import DocPageContainer from "../doc-blocks/DocPageContainer/DocPageContainer";
import DocHeader from "../doc-blocks/DocHeader";


const ShowcaseAccordion = (): JSX.Element => {
  return (
    <DocPageContainer title="Système Accordéon" description="Documentation technique et interactive de la structure Accordion composite (Accordion, AccordionSection, AccordionItem).">
      <DocHeader 
      title={"Accordion (Conteneur)"}
      description=""
      />


    </DocPageContainer>
  );
};

export default ShowcaseAccordion;