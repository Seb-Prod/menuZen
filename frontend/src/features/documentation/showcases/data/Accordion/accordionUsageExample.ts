const accordionUsageExample = `import { Accordion, AccordionSection, AccordionItem } from "@/components/ui/Accordion";
import type { JSX } from "react";

export default function MyComponent(): JSX.Element {
  // Simule une fonction de navigation ou d'action
  const handleItemClick = (label: string) => {
    console.log(\`Élément cliqué : \${label}\`);
    // Logique de navigation ici (ex: router.push(path))
  };
  
  // Définit si l'élément "Documentation" est la page courante
  const isDocActive = true; 

  return (
    <div>
      
      {/* Conteneur principal Accordion avec styles globaux */}
      <Accordion 
        variant="primary" // Couleur principale par défaut pour les labels
        itemVariant="success" // Couleur verte pour l'état actif/survolé
        chevronIcon="arrow" // Flèche comme icône de bascule
      >

        {/* --- Section 1 : Navigation avec état actif --- */}
        <AccordionSection 
          label="Menu Principal"
          defaultOpen={true} // Ouvrir par défaut au montage
        >
          <AccordionItem 
            label="Accueil" 
            onClick={() => handleItemClick("Accueil")}
          />
          <AccordionItem 
            label="Documentation" 
            onClick={() => handleItemClick("Documentation")}
            isActive={isDocActive} // Indicateur de page courante
          />
          <AccordionItem 
            label="Contact" 
            onClick={() => handleItemClick("Contact")}
          />
        </AccordionSection>

        {/* --- Section 2 : Configuration avec surcharges de style --- */}
        <AccordionSection 
          label="Paramètres Avancés"
          variant="neutral" // Surcharge la couleur du label de section à 'neutral'
          size="large" // Surcharge la taille de la section
        >
          <AccordionItem 
            label="Thème Sombre" 
            onClick={() => handleItemClick("Thème")}
          />
          {/* Item avec surcharge de taille individuelle */}
          <AccordionItem 
            label="Gérer les licences" 
            onClick={() => handleItemClick("Licences")}
            size="small" 
            itemVariant="error" // Surcharge la couleur active à 'error' (rouge)
          />
        </AccordionSection>
      </Accordion>
    </div>
  );
}
`;

export default accordionUsageExample;