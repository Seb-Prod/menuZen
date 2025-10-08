import type { JSX } from "react";
import styles from "./Heading.module.css";
import { HEADING_DEFAULTS, type HeadingProps } from "./Heading.types";

/**
 * Composant Heading - Affiche un titre sémantique avec styles personnalisables
 * 
 * Ce composant génère des balises HTML de titre (h1 à h6) avec des options
 * de style prédéfinies pour la couleur, l'alignement et des classes personnalisées.
 * 
 * * @component
 * * @param {HeadingProps} props - Les propriétés passées au composant.
 * @param {ReactNode} props.children - Le contenu à afficher à l'intérieur du titre.
 * @param {HeadingVariant} [props.variant=1] - Le niveau de titre sémantique (h1 à h6).
 * @param {HeadingColor} [props.color='primary'] - La couleur prédéfinie du titre.
 * @param {HeadingAlign} [props.align='left'] - L'alignement du texte.
 * @param {string} [props.className=''] - Des classes CSS personnalisées supplémentaires.
 * * @example
 * <Heading>Mon titre principal</Heading>
 * 
 * @example
 * <Heading variant={2} color="secondary">
 *   Sous-titre coloré
 * </Heading>
 * 
 * @example
 * <Heading variant={3} align="center" color="success">
 *   Opération réussie !
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
    styles[color] || '',
    styles[align] || '',
    className
  ].filter(Boolean).join(' ').trim();
  
  return (
    <Tag className={classNames || undefined}>
      {children}
    </Tag>
  );
};

export default Heading;