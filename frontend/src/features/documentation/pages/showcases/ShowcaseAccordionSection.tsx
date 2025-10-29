/**
 * @file Page de documentation et showcase pour le composant Accordion.
 * @module pages/showcase/ShowcaseAccordion
 */

import { Accordion, AccordionSection } from "@/components/ui/Accordion";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { SHOWCASE_CONSTANTS } from '@/components/ui/Accordion/Accordion.types';
import { accordionProps, accordionUsageExample } from "../../data/Accordion";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";


type ShowcaseCombo = Combination<typeof SHOWCASE_CONSTANTS>;

/**
 * Génère le rendu visuel du Button avec les paramètres sélectionnés.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Button.
 * @returns {JSX.Element} Instance du Button avec les props appliquées.
 */
const renderPreview = (combo: ShowcaseCombo): JSX.Element => (
  <Accordion
    variant={combo.variant}
    size={combo.size}
  >
    <AccordionSection label="Section 1">

    </AccordionSection>
  </Accordion>
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 * 
 * @param {ShowcaseCombo} combo - Combinaison des props du Button.
 * @returns {string} Code TSX formaté représentant le Button configuré.
 */
const generateCode = (combo: ShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
  ];

  return generateCodeString("Accordion", propExpressions, "Example");
};

/**
 * Composant ShowcaseButton - Page de documentation du composant Button.
 * 
 * Page de showcase complète présentant le composant Button avec :
 * - Documentation des props
 * - Exemples d'utilisation
 * - Playground interactif pour tester toutes les variations
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} La page de documentation complète pour Button.
 * 
 * @see {@link Button}
 * @see {@link DocPageContainer}
 * @see {@link BUTTON_SHOWCASE_CONSTANTS}
 */
const ShowcaseButton = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Accordion"
      description="Composant **Accordion** - Ce composant enveloppe l'ensemble de la structure et utilise le `AccordionContext.Provider` pour transmettre des propriétés de style globales (`variant`, `size`, `chevronIcon`, `itemVariant`) à tous ses descendants (`AccordionSection` ou `AccordionItem`), assurant une cohérence visuelle."
      
      params={SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={accordionProps}
    />
  );
};

export default ShowcaseButton;