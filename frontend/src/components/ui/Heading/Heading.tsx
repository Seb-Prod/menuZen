import type { JSX, ReactNode } from "react";
import styles from "./Heading.module.css";

/**
 * Props du composant Heading
 */
type HeadingProps = {
  /** Variante du heading (h1 à h6) */
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Couleur du texte */
  color?: "primary" | "secondary" | "dark" | "light" | "neutral" | "warning" | "success";
  /** Contenu du heading */
  children: ReactNode;
  /** Classes CSS additionnelles */
  className?: string;
};

/**
 * Composant Heading
 * 
 * @component
 * @example
 * ```tsx
 * // Heading principal
 * <Heading variant={1}>Mon titre</Heading>
 * 
 * // Avec couleur personnalisée
 * <Heading variant={2} color="secondary">
 *   Sous-titre
 * </Heading>
 * ```
 * 
 * @param {HeadingProps} props - Les propriétés du composant
 * @returns Le composant Heading rendu
 */
const Heading = ({ 
  children, 
  variant = 1, 
  color = "primary",
  className = ""
}: HeadingProps) => {
  const Tag = `h${variant}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`${styles[color]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;