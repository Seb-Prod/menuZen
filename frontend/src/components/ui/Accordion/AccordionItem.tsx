/**
 * @file Composant AccordionItem
 * @module components/ui/AccordionItem
 */

import type { JSX } from "react";
import styles from "./Accordion.module.css";
import { useAccordion } from "./Accordion.context";
import { ACCORDION_ITEM_DEFAULTS, type AccordionItemProps } from "./Accordion.types";

/**
 * Composant AccordionItem - Élément cliquable dans une section d'accordéon.
 *
 * Ce composant représente un élément interactif (bouton) généralement utilisé
 * à l'intérieur d'une `AccordionSection`. Il peut afficher un label et réagir
 * au clic. Les styles sont hérités du contexte mais peuvent être surchargés
 * individuellement.
 *
 * @component
 * @version 2.0.2
 * @since 2025-10-17
 * @author Seb-Prod
 *
 * @param {AccordionItemProps} props - Les propriétés du composant.
 * @param {string} [props.label='Item'] - Le texte à afficher sur le bouton.
 * @param {() => void} [props.onClick] - Fonction de rappel exécutée lors du clic.
 * @param {boolean} [props.isActive=false] - Si vrai, applique un style actif au bouton.
 * @param {ReactNode} [props.children] - Contenu alternatif au label (pour des éléments complexes).
 * @param {AccordionItemActiveVariant} [props.itemVariant] - Surcharge la variante active héritée du contexte.
 * @param {AccordionSize} [props.size] - Surcharge la taille héritée du contexte.
 *
 * @returns {JSX.Element} L'élément bouton React.
 *
 * @example
 * // Item simple dans une section
 * <AccordionItem
 *   label="Détails du produit"
 *   onClick={() => console.log('Cliqué!')}
 *   isActive={true}
 * />
 *
 * @example
 * // Item avec surcharge de style
 * <AccordionItem
 *   label="Élément important"
 *   itemVariant="error"
 *   size="large"
 *   isActive={false}
 * />
 *
 * @example
 * // Item avec children personnalisé
 * <AccordionItem onClick={handleClick}>
 *   <span>🎉</span> Élément spécial
 * </AccordionItem>
 *
 * @see {@link AccordionItemProps}
 * @see {@link ACCORDION_ITEM_DEFAULTS}
 * @see {@link useAccordion}
 */
const AccordionItem = ({
  label = ACCORDION_ITEM_DEFAULTS.label,
  onClick,
  isActive = false,
  children,
  size: propSize,
  itemVariant: propItemVariant,
}: AccordionItemProps): JSX.Element => {
  const context = useAccordion();

  // Résolution des valeurs finales (props > contexte)
  const finalSize = propSize ?? context.size;
  const finalVariant = propItemVariant ?? context.itemVariant;

  // Construction des classes CSS
  const buttonClasses = [
    styles.item,
    `component-${finalVariant}`,
    `component-${finalSize}`,
    `transparent`,
    isActive && `active`,
    isActive && styles.active,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type="button"
      aria-pressed={isActive}
    >
      {children ?? label}
    </button>
  );
};

export default AccordionItem;