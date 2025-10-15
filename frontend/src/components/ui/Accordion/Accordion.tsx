/**
 * @file Composant Accordion
 * @module components/ui/Accordion
 */

import type { JSX } from "react";
import styles from "./Accordion.module.css";
import { ACCORDION_DEFAULTS, type AccordionProps } from './Accordion.types';

/**
 * Composant Accordion - Description simple
 * 
 * Description détaillé
 * 
 * @component
 * 
 * @param {AccordionProps} props - Les propriétés du composant.
 * @param
 * 
 * Les types détaillés sont définis dans {@link AccordionProps}.
 * @example
 * ```tsx
 * // Utilisation simple
 * <Accordion />
 * ```
 */
const Accordion = ({ variant = ACCORDION_DEFAULTS.variant }: AccordionProps): JSX.Element => {
  return (
    <div className={styles[variant]}>
      test
    </div>
  );
};

export default Accordion;