import type { JSX } from "react";
import DocPageContainer from "../doc-blocks/DocPageContainer/DocPageContainer";
import { Accordion, AccordionSection } from "@/components/ui/Accordion";
import { DocProps } from "../doc-blocks";
import { accordionProps} from "./data/Accordion";

const ShowcaseAccordion = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Système Accordéon"
      description={`Un composant **Accordion** permet d'organiser du contenu en sections repliables. Il est particulièrement utile pour afficher de grandes quantités d'informations de manière structurée et accessible, comme des FAQ, des menus de navigation ou des panneaux de configuration.`}
    >
      <Accordion>
        <AccordionSection title="Props Accordion" defaultOpen>
          <DocProps 
            description={`Le composant **Accordion** est le conteneur principal qui gère l'état global des sections. Il utilise le **React Context** pour transmettre les paramètres visuels (\`variant\`, \`size\`, \`textStyle\`) à tous ses enfants.`}
            props={accordionProps} 
          />
        </AccordionSection>

        <AccordionSection title="Props AccordionSection">
          <DocProps 
            description={`Le composant **AccordionSection** représente une section individuelle au sein de l'accordéon. Chaque section possède son propre état et peut être contrôlée indépendamment ou en coordination avec les autres sections.

**Fonctionnalités :**
- État ouvert/fermé contrôlable ou non contrôlé
- Option \`defaultOpen\` pour définir l'état initial
- Intégration automatique avec le contexte parent
- Animation fluide à l'ouverture et la fermeture`}
            props={accordionProps} 
          />
        </AccordionSection>

        <AccordionSection title="Props AccordionButton">
          <DocProps 
            description={`Le composant **AccordionButton** est l'élément interactif qui permet de basculer l'état d'une section. Il affiche généralement le titre de la section et un indicateur visuel (icône, chevron) de son état.

**Comportement :**
- Toggle automatique de la section au clic
- Indicateur visuel de l'état ouvert/fermé (rotation d'icône)
- Support complet du clavier (Enter, Space)
- Attributs ARIA pour l'accessibilité (\`aria-expanded\`, \`aria-controls\`)
- Personnalisation du style selon l'état`}
            props={accordionProps} 
          />
        </AccordionSection>

        <AccordionSection title="Props AccordionContent">
          <DocProps 
            description={`Le composant **AccordionContent** contient le contenu à afficher lorsque la section est ouverte. Il gère l'animation d'apparition et la transition entre les états.

**Détails techniques :**
- Affichage/masquage automatique selon l'état de la section
- Animations CSS pour des transitions fluides
- Hauteur calculée dynamiquement pour l'animation
- Optimisation des performances (lazy mounting optionnel)
- Support du contenu riche (texte, images, composants)`}
            props={accordionProps} 
          />
        </AccordionSection>
      </Accordion>
    </DocPageContainer>
  );
};

export default ShowcaseAccordion;