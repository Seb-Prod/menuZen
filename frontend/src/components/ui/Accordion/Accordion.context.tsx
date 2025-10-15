import { createContext, useContext } from 'react';
import type { AccordionVariant } from './Accordion.types';

interface AccordionContextValue {
  variant: AccordionVariant;
}

export const AccordionContext = createContext<AccordionContextValue | null>(null);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion doit être utilisé dans un Accordion');
  }
  return context;
};