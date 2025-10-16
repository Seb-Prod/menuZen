import { createContext, useContext } from 'react';
import type { AccordionTextStyle, AccordionSize, AccordionVariant } from '../types/Accordion.types';

interface AccordionContextValue {
  variant: AccordionVariant;
  size: AccordionSize;
  textStyle:AccordionTextStyle;
}

export const AccordionContext = createContext<AccordionContextValue | null>(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion doit être utilisé dans un Accordion');
  }
  return context;
};