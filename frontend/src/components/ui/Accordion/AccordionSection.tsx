/**
 * @file Composant AccordionSection
 * @module components/ui/AccordionSection
 */

import { useState, type JSX } from "react";
import styles from "./AccordionSection.module.css";
import { ACCORDION_SECTION_DEFAULTS, type AccordionSectionProps } from "./Accordion.types";

/**
 * Composant AccordionSection - Une section complète avec bascule (toggle) et contenu.
 *
 * Ce composant gère son propre état d'ouverture/fermeture (`isOpen`)
 * et affiche le contenu (`children`) uniquement lorsqu'il est ouvert.
 * Il peut également appeler une fonction externe `onClick` lors du basculement.
 *
 * @component
 *
 * @param {AccordionSectionProps} props - Les propriétés du composant.
 * @param {string} [props.label='Accordion Section'] - Le titre affiché sur l'en-tête de la section.
 * @param {boolean} [props.defaultOpen=false] - Si vrai, la section est ouverte par défaut au montage.
 * @param {ReactElement | ReactElement[]} props.children - Le contenu à afficher lorsque la section est ouverte (typiquement des `AccordionItem`).
 * @param {() => void} [props.onClick] - Fonction de rappel exécutée après chaque basculement de la section.
 * @param {boolean} [props.isActive=false] - Si vrai, applique un style 'actif' à la section (pour la mettre en évidence).
 *
 * Les types détaillés sont définis dans {@link AccordionSectionProps}.
 *
 * @example
 * // Section simple avec un élément enfant
 * <AccordionSection label="Mes Options" defaultOpen={true}>
 * <AccordionItem title="Option 1" onClick={() => console.log('1')} />
 * <AccordionItem title="Option 2" onClick={() => console.log('2')} />
 * </AccordionSection>
 *
 * @example
 * // Section inactive avec un gestionnaire de clic
 * <AccordionSection label="Avertissements" onClick={() => console.log('Toggle')}>
 * <p>Contenu textuel simple</p>
 * </AccordionSection>
 */
const AccordionSection = ({ 
    label=ACCORDION_SECTION_DEFAULTS.label, 
    defaultOpen=ACCORDION_SECTION_DEFAULTS.defaultOpen, 
    children, 
    onClick, 
    isActive = false,
}: AccordionSectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  // Fonction qui gère à la fois l'état interne et l'action externe
  const handleToggle = () => {
      // Gère l'état d'ouverture/fermeture
      setIsOpen(!isOpen); 

      // Exécute la fonction externe si elle est fournie
      if (onClick) {
          onClick();
      }
  };

  return (
    <div className={`${styles.accordionSection} ${isActive ? styles.activeSection : ''}`}>
      <button 
        className={`${styles.sectionHeader} ${isOpen ? styles.open : ''} ${isActive ? styles.active : ''}`}
        onClick={handleToggle}
        type="button"
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.icon}>{isOpen ? '▼' : '▶'}</span>
      </button>
      
      {isOpen && (
        <div className={styles.sectionContent}>
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionSection;