// features/documentation/pages/components/DocumentationSidebar/showcaseUtils.tsx
import type { JSX } from "react";
import { AccordionItem, AccordionSection } from "@/components/ui/Accordion";
import type { DocumentationItem } from "@/features/documentation/types/types";

/**
 * Filtre une structure de documentation pour ne garder que les composants existants
 */
export const filterStructure = (
    structure: DocumentationItem[],
    showcaseNames: string[]
): DocumentationItem[] => {
    return structure
        .filter((item) => {
            if (item.children) {
                return item.children.some((child) => showcaseNames.includes(child.key));
            }
            return showcaseNames.includes(item.key);
        })
        .map((item) => {
            if (item.children) {
                return {
                    ...item,
                    children: item.children.filter((child) => showcaseNames.includes(child.key)),
                };
            }
            return item;
        });
};

/**
 * Rend un item
 */
export const renderItem = (
    item: DocumentationItem,
    selected: string | null,
    onSelect: (key: string) => void
): JSX.Element => {
    if (item.children && item.children.length > 0) {
        return (
            <AccordionSection
                key={item.key}
                label={item.label}
                size="small"
                onClick={() => onSelect(item.children![0].key)}
            >
                {item.children.map((child) => (
                    <AccordionItem
                        key={child.key}
                        label={child.label}
                        onClick={() => onSelect(child.key)}
                        isActive={selected === child.key}
                    />
                ))}
            </AccordionSection>
        );
    }

    return (
        <AccordionItem
            key={item.key}
            label={item.label}
            onClick={() => onSelect(item.key)}
            isActive={selected === item.key}
        />
    );
}