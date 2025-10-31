/**
 * @file Composant Heading.
 * @module components/ui/Heading
 */

import type { JSX } from "react";
import { DEFAULTS, type Props } from './Heading.types';
import { classNames } from "@/utils/object";

/**
 * Composant Heading - Affiche un titre sémantique avec styles personnalisables.
 * 
 * Génère des balises HTML de titre (h1 à h6) avec des options de style
 * prédéfinies pour la couleur, l'alignement et des classes personnalisées.
 * 
 * @component
 * @version 1.2.0
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @param {HeadingProps} props - Les propriétés du composant.
 * @param {ReactNode} props.children - Le contenu à afficher dans le titre.
 * @param {As} [props.as='h1'] - Le niveau de titre sémantique (1=h1, 2=h2, ..., 6=h6).
 * @param {UiVariant} [props.variant='primary'] - La couleur prédéfinie du titre (primary, secondary, dark, light, neutral, warning, success).
 * @param {UiTextJustify} [props.justify='left'] - L'alignement horizontal du texte (left, right, center, justify).
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
 * <Heading as="h2" variant="secondary">
 *   Sous-titre coloré
 * </Heading>
 * 
 * @example
 * // Titre centré avec couleur de succès
 * <Heading as="h3" justify="center" color="success">
 *   Opération réussie !
 * </Heading>
 * 
 * @example
 * // Titre avec classes CSS personnalisées
 * <Heading as="h4" className="my-custom-class">
 *   Titre personnalisé
 * </Heading>
 */

const Heading = (inputProps: Props): JSX.Element => {
  const { as, variant, justify, className, children } = { ...DEFAULTS, ...inputProps }
  const Tag = as as keyof JSX.IntrinsicElements;

  // Construction sécurisée des classes CSS
  const classes = classNames(
    `text-${variant}`,
    `text-fullWidth`,
    `text-${justify}`,
    className
  )

  return (
    <Tag className={classes || undefined}>
      {children}
    </Tag>
  );
};

export default Heading;