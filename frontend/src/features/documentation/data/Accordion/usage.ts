/**
 * @file Exemples d'utilisation du composant Accordion
 * @module features/documentation/data/Accordion/usage
 * @description
 * Code examples et documentation d'usage
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

export const accordionUsageExample = `import { Accordion, AccordionSection, AccordionItem } from "@/components/ui/Accordion";
import type { JSX } from "react";

export default function MyComponent(): JSX.Element {
  // Simule une fonction de navigation ou d'action
  const handleItemClick = (label: string) => {
    console.log(\`Élément cliqué : \${label}\`);
    // Logique de navigation ici (ex: router.push(path))
  };
  
  // Exemple d’état actif pour indiquer la page courante
  const isDocActive = true;

  return (
    <div>
      {/* Conteneur principal Accordion */}
      <Accordion
        variant="primary"      // Thème principal de l’Accordion
        size="medium"          // Taille globale des sections et items
        chevronIcon="arrow"    // Icône utilisée pour ouvrir/fermer les sections
        chevronAlignment="end" // Positionne le chevron à droite du label
      >

        {/* --- Section 1 : Navigation principale --- */}
        <AccordionSection label="Menu Principal" defaultOpen={true}>
          <AccordionItem 
            label="Accueil" 
            onClick={() => handleItemClick("Accueil")} 
          />
          <AccordionItem 
            label="Documentation" 
            onClick={() => handleItemClick("Documentation")} 
            isActive={isDocActive} 
          />
          <AccordionItem 
            label="Contact" 
            onClick={() => handleItemClick("Contact")} 
          />
        </AccordionSection>

        {/* --- Section 2 : Paramètres --- */}
        <AccordionSection label="Paramètres">
          <AccordionItem 
            label="Thème Sombre" 
            onClick={() => handleItemClick("Thème Sombre")} 
          />
          <AccordionItem 
            label="Gérer les licences" 
            onClick={() => handleItemClick("Licences")} 
          />
        </AccordionSection>

      </Accordion>
    </div>
  );
}
`;

export default accordionUsageExample;