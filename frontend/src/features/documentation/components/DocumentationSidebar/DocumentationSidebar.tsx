/**
 * @file Composant DocumentationSidebar.
 * @module features/documentation/components/DocumentationSidebar
 */

import type { JSX } from "react";
import { SideBar } from "@/components/layout";
import { Accordion, AccordionSection } from "@/components/ui/Accordion";
import { ThemeToggle } from "@/components/ui";
import { filterStructure, renderItem } from "./sidebarItems";
import { SECTION_KEYS } from "../../pages/DocumentationContent";
import { DESIGN_STRUCTURE, LAYOUT_STRUCTURE, UI_STRUCTURE } from "@/features/documentation/config";
import type { Props } from "./DocumentationSidebar.types";

/**
 * Composant DocumentationSidebar - Barre latérale de navigation pour la documentation.
 * 
 * Affiche une barre latérale structurée en sections accordéon contenant la navigation
 * vers les différents composants du design system, des composants UI et des composants Layout.
 * Filtre automatiquement les structures en fonction des composants disponibles et met en évidence
 * l'élément actuellement sélectionné.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-29
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @param {string[]} props.showcaseNames - Liste des noms de composants disponibles pour filtrer l'affichage.
 * @param {SelectedKey} props.selected - Identifiant de l'élément actuellement sélectionné dans la navigation.
 * @param {(key: string) => void} props.onSelect - Fonction de callback déclenchée lors du clic sur un élément de navigation.
 * 
 * @returns {JSX.Element} L'élément sidebar de documentation React (JSX).
 * 
 * @see {@link Props}
 * @see {@link SideBar}
 * @see {@link Accordion}
 * @see {@link AccordionSection}
 */
const DocumentationSidebar = ({ showcaseNames, selected, onSelect }: Props): JSX.Element => {
  const filteredUIStructure = filterStructure(UI_STRUCTURE, showcaseNames);
  const filteredLayoutStructure = filterStructure(LAYOUT_STRUCTURE, showcaseNames);
  const filteredDesignStructure = filterStructure(DESIGN_STRUCTURE, showcaseNames);

  return (
    <SideBar variantToggleMenu="info" variant="surface-secondary">
      <ThemeToggle />
      <Accordion variant="info">
        <AccordionSection label="Design System" onClick={() => onSelect(SECTION_KEYS.THEME)}>
          {filteredDesignStructure.map((item) => renderItem(item, selected, onSelect))}
        </AccordionSection>

        <AccordionSection label="Composants UI" onClick={() => onSelect(SECTION_KEYS.UI)} defaultOpen>
          {filteredUIStructure.map((item) => renderItem(item, selected, onSelect))}
        </AccordionSection>

        <AccordionSection label="Composants Layout" onClick={() => onSelect(SECTION_KEYS.LAYOUT)}>
          {filteredLayoutStructure.map((item) => renderItem(item, selected, onSelect))}
        </AccordionSection>
      </Accordion>
    </SideBar>
  );
};

export default DocumentationSidebar;