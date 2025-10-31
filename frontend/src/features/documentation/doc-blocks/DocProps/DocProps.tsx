/**
 * @file Composant DocProps pour l'affichage des propriétés de composants.
 * @module features/documentation/doc-blocks/DocProps
 */

import type { JSX } from "react";
import styles from "./DocProps.module.css";
import stylesMarkdown from "../ReactMarkdown.module.css";
import type { PropInfo } from "../../types/types";
import { Table, Text } from "@/components/ui";
import ReactMarkdown from "react-markdown";

type DocPropsProps = {
  /** Description optionnelle au format Markdown affichée avant le tableau. */
  description?: string;
  /** Liste des propriétés du composant à documenter. */
  props: readonly PropInfo[];
};

/**
 * Composant DocProps - Tableau de documentation des propriétés.
 * 
 * Affiche un tableau structuré présentant les propriétés (props) d'un composant
 * avec leurs types, descriptions, caractère requis et valeurs par défaut.
 * Supporte une description préliminaire au format Markdown.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 * 
 * @param {DocPropsProps} props - Les propriétés du composant.
 * @param {string} [props.description] - Texte introductif optionnel au format Markdown.
 * @param {readonly PropInfo[]} props.props - Tableau des informations de propriétés à afficher.
 * 
 * @returns {JSX.Element} Le tableau de documentation des props ou un message si aucune prop.
 * 
 * @example
 * // Tableau de props simple
 * <DocProps 
 *   props={[
 *     { name: 'variant', type: 'string', description: 'Style du bouton', required: false, default: 'primary' },
 *     { name: 'onClick', type: 'Function', description: 'Gestionnaire de clic', required: true }
 *   ]}
 * />
 * 
 * @example
 * // Avec description Markdown
 * <DocProps 
 *   description="Ce composant accepte les props suivantes pour personnaliser son apparence :"
 *   props={[
 *     { name: 'size', type: 'ButtonSize', description: 'Taille du bouton', required: false, default: 'medium' }
 *   ]}
 * />
 * 
 * @example
 * // Sans propriétés (affiche un message par défaut)
 * <DocProps props={[]} />
 * 
 * @see {@link DocPropsProps}
 * @see {@link PropInfo}
 */
const DocProps = ({ props, description }: DocPropsProps): JSX.Element => {
  const headers = ['Nom', 'Type', 'Description', 'Requis', 'Default'];

  const data = props.map((prop) => [
    <code>{prop.name}</code>,
    <code>{prop.type}</code>,
    <ReactMarkdown>{prop.description}</ReactMarkdown>,
    prop.required ? "✅" : "❌",
    prop.default ? <code>{prop.default}</code> : "-",
  ]);

  const showTable = data && data.length > 0;

  return (
    <div className={styles.container}>
      {description ? (
        <div className={stylesMarkdown.stylesMarkdown}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      ) : ""}
      {showTable ? (
        <Table headers={headers} data={data} className={styles.table} variant="info"/>
      ) : (
        <Text>Aucune propriété n'est disponible pour ce composant.</Text>
      )}
    </div>
  );
}

export default DocProps;
