import Accordion from "@/components/ui/Accordion";
import { ShowcaseComponent } from "../components";
import type { JSX } from "react";
import type { Combination } from "../utils/showcaseHelpers";
import { ACCORDION_SHOWCASE_CONSTANTS } from '@/components/ui/Accordion/Accordion.types';
import { accordionProps, accordionUsageExample } from "./data/Accordion";
import { generateCodeString } from "../utils";

type AccordionShowcaseCombo = Combination<typeof ACCORDION_SHOWCASE_CONSTANTS>;

const renderAccordionPreview = (combo: AccordionShowcaseCombo): JSX.Element => (
  <Accordion 
    variant={combo.variant} 
  >
  </Accordion>
);

const generateAccordionCode = (combo: AccordionShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`
  ];

  return generateCodeString("Accordion", propExpressions, true);
};

const ShowcaseAccordion = (): JSX.Element => {
  return (
    <ShowcaseComponent
      title="Accordion"
      description="Documentation à faire"
      propsData={accordionProps}
      usageExample={accordionUsageExample}
      params={ACCORDION_SHOWCASE_CONSTANTS}
      renderPreview={renderAccordionPreview}
      generateCode={generateAccordionCode}
    />
  );
};

export default ShowcaseAccordion;