/**
 * @file Composant Heading
 * @module components/ui/Heading
 */

import { type JSX } from "react";
import { DEFAULTS, type Props } from "./Heading.types";
import { classNames } from "@/utils/object";

/**
 * Composant **Heading** — Élément typographique pour afficher des titres hiérarchiques.
 * 
 * Ce composant génère dynamiquement une balise HTML de titre (`h1` à `h6`) selon la prop `as`.  
 * Il propose plusieurs variantes de couleur (`variant`), options d’alignement (`justify`)  
 * et la possibilité d’ajouter des classes CSS personnalisées via `className`.
 * 
 * Il garantit la cohérence visuelle et sémantique des titres à travers l’application,  
 * tout en offrant une grande souplesse de personnalisation.
 * 
 * @component
 * @version 1.3.0
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @returns {JSX.Element} Élément React représentant un titre sémantique stylisé.
 * 
 * @example
 * // Titre principal (h1)
 * <Heading>Mon titre principal</Heading>
 * 
 * @example
 * // Sous-titre coloré
 * <Heading as="h2" variant="secondary">
 *   Sous-titre coloré
 * </Heading>
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut
 */
const Heading = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const { as, variant, justify, className, children } = props;
  
  const Tag = as as keyof JSX.IntrinsicElements;

  const classes = classNames(
    `text-${variant}`,
    `text-${justify}`,
    "text-fullWidth",
    className
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;