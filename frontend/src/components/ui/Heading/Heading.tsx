/**
 * @file Composant Heading.
 * @module components/ui/Heading
 */

import type { JSX } from "react";
import { HEADING_DEFAULTS, type HeadingProps } from "./Heading.types";

/**
 * Composant Heading - Affiche un titre sémantique avec styles personnalisables.
 * 
 * Génère des balises HTML de titre (h1 à h6) avec des options de style
 * prédéfinies pour la couleur, l'alignement et des classes personnalisées.
 * 
 * @component
 * @version 1.1.0
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @param {HeadingProps} props - Les propriétés du composant.
 * @param {ReactNode} props.children - Le contenu à afficher dans le titre.
 * @param {HeadingVariant} [props.variant=1] - Le niveau de titre sémantique (1=h1, 2=h2, ..., 6=h6).
 * @param {HeadingColor} [props.color='primary'] - La couleur prédéfinie du titre (primary, secondary, dark, light, neutral, warning, success).
 * @param {HeadingAlign} [props.align='left'] - L'alignement horizontal du texte (left, right, center, justify).
 * @param {string} [props.className=''] - Classes CSS personnalisées supplémentaires.
 * 
 * Les types détaillés sont définis dans {@link HeadingProps}.
 * 
 * @example
 * // Titre principal par défaut (h1)
 * <Heading>Mon titre principal</Heading>
 * 
 * @example
 * // Sous-titre avec couleur personnalisée
 * <Heading variant={2} color="secondary">
 *   Sous-titre coloré
 * </Heading>
 * 
 * @example
 * // Titre centré avec couleur de succès
 * <Heading variant={3} align="center" color="success">
 *   Opération réussie !
 * </Heading>
 * 
 * @example
 * // Titre avec classes CSS personnalisées
 * <Heading variant={4} className="my-custom-class">
 *   Titre personnalisé
 * </Heading>
 */

const Heading = ({ 
  children, 
  variant = HEADING_DEFAULTS.variant,
  color = HEADING_DEFAULTS.color,
  align = HEADING_DEFAULTS.align,
  className = ""
}: HeadingProps): JSX.Element => {
  const Tag = `h${variant}` as keyof JSX.IntrinsicElements;
  
  // Construction sécurisée des classes CSS
  const classNames = [
    `text-${color}`,
    `text-fullWidth`,
    `text-${align}`,
    className
  ].filter(Boolean).join(' ').trim();
  
  return (
    <Tag className={classNames || undefined}>
      {children}
    </Tag>
  );
};

export default Heading;