/**
 * @file Composant SeeDocumentationLink.
 * @module features/documentation/components/SeeDocumentationLink
 */

import type { JSX } from "react";
import { DEFAULTS, type Props } from "./SeeDocumentationLink.types";
import { classNames } from "@/utils/object";
import styles from "./SeeDocumentationLink.module.css";

/**
 * Composant SeeDocumentationLink - Lien réutilisable pour naviguer vers la documentation d'un autre composant.
 * 
 * Affiche un bouton contenant un icône "info" et un texte. 
 * Lors du clic, la fonction `onNavigate` est appelée avec la clé du composant cible.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-31
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @param {string} props.target - Clé du composant ou de la section vers laquelle naviguer.
 * @param {(key: string) => void} [props.onNavigate] - Fonction de navigation appelée au clic avec la clé du `target`.
 * 
 * @returns {JSX.Element} Le bouton React permettant de naviguer vers la documentation du composant cible.
 * 
 * @see {@link Props}
 */
const SeeDocumentationLink = (inputProps: Props): JSX.Element => {
  const { target, onNavigate } = { ...DEFAULTS, ...inputProps };

  const classes = classNames(styles.link, "component-info");

  return (
    <div className={classes}>
      <button onClick={() => onNavigate?.(target)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.icon}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="8" />
        </svg>
        <span>
          Voir la documentation du composant{" "}
          <span className={styles.target}>{target}</span>
        </span>
      </button>
    </div>
  );
};

export default SeeDocumentationLink;