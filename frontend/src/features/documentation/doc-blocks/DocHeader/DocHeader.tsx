/**
 * @file Composant DocHeader pour l'en-tête des pages de documentation.
 * @module features/documentation/doc-blocks/DocHeader
 */

import { Heading } from "@/components/ui";
import type { JSX } from "react";
import ReactMarkdown from 'react-markdown';

export type DocHeaderProps = {
    /** Titre principal de la page de documentation. */
    title: string;
    /** Description optionnelle au format Markdown. */
    description?: string;
}

/**
 * Composant DocHeader - En-tête de page de documentation.
 * 
 * Affiche un titre principal (H1) et une description optionnelle supportant
 * la syntaxe Markdown pour un formatage enrichi (gras, italique, liens, etc.).
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 * 
 * @param {DocHeaderProps} props - Les propriétés du composant.
 * @param {string} props.title - Titre de la page affiché en heading de niveau 1.
 * @param {string} [props.description] - Description facultative avec support Markdown.
 * 
 * @returns {JSX.Element} L'en-tête de documentation avec titre et description.
 * 
 * @example
 * // En-tête simple avec titre uniquement
 * <DocHeader title="Button Component" />
 * 
 * @example
 * // En-tête avec description Markdown
 * <DocHeader 
 *   title="Button Component"
 *   description="Composant **Button** personnalisable avec plusieurs variantes."
 * />
 * 
 * @example
 * // Description avec lien Markdown
 * <DocHeader 
 *   title="Advanced Usage"
 *   description="Pour plus d'informations, consultez [la documentation](https://example.com)."
 * />
 * 
 * @see {@link DocHeaderProps}
 */
const DocHeader = ({ title, description }: DocHeaderProps): JSX.Element => {
    return (
        <header>
            <Heading variant={1}>{title}</Heading>
            {description && <ReactMarkdown>{description}</ReactMarkdown>}
        </header>
    );
}

export default DocHeader;