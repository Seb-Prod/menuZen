/**
 * @file Composant SectionDocumentation.
 * @module features/documentation/components/SectionDocumentation
 */

import type { JSX } from "react";
import type { Props } from "./SectionDocumentation.types";
import { Heading, Text } from "@/components/ui";

/**
 * Composant SectionDocumentation - Section d'affichage de documentation.
 * 
 * Affiche une section de documentation avec un titre et une description textuelle.
 * Utilisé pour présenter les différentes parties de la documentation des composants.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-29
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @param {string} props.title - Titre principal de la section affiché avec un soulignement.
 * @param {string} props.description - Texte descriptif affiché sous le titre.
 * 
 * @returns {JSX.Element} L'élément section de documentation React (JSX).
 * 
 * @see {@link Props}
 */
const SectionDocumentation = ({ title, description }: Props): JSX.Element => (
  <div>
    <Heading justify="center">{title}</Heading>
    <Text justify="justify">{description}</Text>
  </div>
);

export default SectionDocumentation;