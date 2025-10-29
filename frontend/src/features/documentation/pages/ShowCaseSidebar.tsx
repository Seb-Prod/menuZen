import type { JSX } from "react";
import { SideBar } from "@/components/layout";
import { Accordion, AccordionItem, AccordionSection } from "@/components/ui/Accordion";
import { ThemeToggle } from "@/components/ui";
import { SECTION_KEYS } from "./ShowcaseContent";

interface ShowcaseSidebarProps {
  showcaseNames: string[];
  selected: string | null;
  onSelect: (key: string) => void;
}

const ShowcaseSidebar = ({ showcaseNames, selected, onSelect }: ShowcaseSidebarProps): JSX.Element => (
  <SideBar variantToggleMenu="info" variant="surface-secondary">
    <ThemeToggle />
    <Accordion
      variant="info"
      size="large"
      chevronIcon="dots"
      itemVariant="info"
      itemMode="ghost"
      chevronAlignment="edge"
    >
      <AccordionSection label="Design System" onClick={() => onSelect(SECTION_KEYS.THEME)}>
        <AccordionItem label="Couleurs & Typo" onClick={() => onSelect(SECTION_KEYS.THEME)} isActive={selected === SECTION_KEYS.THEME} />
      </AccordionSection>

      <AccordionSection label="Composants UI" onClick={() => onSelect(SECTION_KEYS.UI)} defaultOpen>
        {showcaseNames.map((name) => (
          <AccordionItem
            key={name}
            label={name}
            onClick={() => onSelect(name)}
            isActive={selected === name}
          />
        ))}
      </AccordionSection>

      <AccordionSection label="Composants Layout" onClick={() => onSelect(SECTION_KEYS.PROJECTS)}>
        <AccordionItem label="Structure de Page" onClick={() => onSelect(SECTION_KEYS.PROJECTS)} isActive={selected === SECTION_KEYS.PROJECTS} />
        <AccordionItem label="Projet 1 (Exemple)" itemVariant="info" size="large" />
      </AccordionSection>
    </Accordion>
  </SideBar>
);

export default ShowcaseSidebar;