/**
 * @file Composant AccordionItem
 * @module components/ui/AccordionItem
 */

import type { JSX } from "react";
import styles from "./AccordionItem.module.css";
import { useAccordion } from "./Accordion.context";
import { ACCORDION_ITEM_DEFAULTS, type AccordionItemProps } from "./Accordion.types";

/**
 * Composant AccordionItem - En-tête cliquable d'un élément d'accordéon.
 *
 * Ce composant représente la zone qui, une fois cliquée,
 * active ou désactive l'affichage du contenu associé (généralement dans le cas
 * d'un accordéon géré en externe ou au sein d'un composant parent comme `AccordionSection`).
 * Il récupère sa variante de style depuis le `AccordionContext`.
 *
 * @component
 *
 * @param {AccordionItemProps} props - Les propriétés du composant.
 * @param {string} [props.title='Accordion Item'] - Le texte à afficher sur l'en-tête du bouton.
 * @param {() => void} [props.onClick] - La fonction de rappel à exécuter lors du clic sur le bouton.
 * @param {boolean} [props.isActive=false] - Si vrai, applique un style 'actif' au bouton (pour indiquer qu'il est sélectionné ou ouvert).
 *
 * Les types détaillés sont définis dans {@link AccordionItemProps}.
 *
 * @example
 * // Utilisé à l'intérieur d'un AccordionSection
 * <AccordionItem
 * title="Détails du produit"
 * onClick={() => console.log('Élément cliqué!')}
 * isActive={true}
 * />
 */
const AccordionItem = ({ 
    title=ACCORDION_ITEM_DEFAULTS.title, 
    onClick, 
    isActive 
}: AccordionItemProps): JSX.Element => {
  const {variant} = useAccordion();
  return (
    <button 
      className={`${styles.item} ${styles[variant]} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      type="button"
    >
      {title}
    </button>
  );
};

export default AccordionItem;