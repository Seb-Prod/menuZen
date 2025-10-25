/**
 * @file Composant Table.
 * @module components/ui/Table
 */

import type { JSX } from 'react';
import styles from "./Table.module.css"
import { TABLE_DEFAULTS, type TableProps } from './Table.types';
import { classNames } from '@/utils/object';

/**
 * Composant Table - Tableau HTML réutilisable et personnalisable.
 * 
 * Permet d'afficher des données tabulaires avec des en-têtes personnalisables
 * et supporte différentes variantes de style, tailles et options d'alignement. 
 * Le contenu des cellules peut être n'importe quel élément React (texte, composants, etc.).
 * 
 * @component
 * @version 1.1.0
 * @since 2025-10-22
 * @author Seb-Prod
 * 
 * @param {TableProps} props - Les propriétés du composant.
 * @param {string[]} props.headers - Tableau des libellés d'en-têtes de colonnes.
 * @param {React.ReactNode[][]} props.data - Tableau bidimensionnel contenant les données des cellules (lignes × colonnes).
 * @param {UiVariant} [props.variant='primary'] - Schéma de couleur du tableau (primary, secondary, success, error, info, neutral).
 * @param {UiSize} [props.size='medium'] - Taille prédéfinie du tableau (small, medium, large).
 * @param {UiAlign} [props.align='left'] - Position horizontale du tableau dans son conteneur (left, center, right).
 * @param {boolean} [props.fullWidth=false] - Si vrai, le tableau occupe 100% de la largeur du conteneur.
 * @param {string} [props.className=''] - Classes CSS personnalisées supplémentaires.
 * 
 * @returns {JSX.Element} L'élément table React (JSX).
 * 
 * @example
 * // Tableau simple avec des données textuelles
 * <Table 
 *   headers={['Nom', 'Âge', 'Ville']}
 *   data={[
 *     ['Alice', '28', 'Paris'],
 *     ['Bob', '34', 'Lyon']
 *   ]}
 * />
 * 
 * @example
 * // Tableau avec variante secondary et alignement à gauche
 * <Table 
 *   variant="secondary"
 *   align="left"
 *   headers={['Produit', 'Prix', 'Stock']}
 *   data={[
 *     ['Clavier', '49.99€', '15'],
 *     ['Souris', '29.99€', '8']
 *   ]}
 * />
 * 
 * @example
 * // Tableau pleine largeur en grande taille
 * <Table 
 *   fullWidth
 *   size="large"
 *   headers={['Utilisateur', 'Statut', 'Actions']}
 *   data={[
 *     [
 *       <strong>Jean Dupont</strong>,
 *       <span className="badge">Actif</span>,
 *       <Button size="small">Modifier</Button>
 *     ]
 *   ]}
 * />
 * 
 * @see {@link TableProps}
 * @see {@link TABLE_DEFAULTS}
 */
const Table = ({
    headers,
    data,
    align = TABLE_DEFAULTS.align,
    variant = TABLE_DEFAULTS.variant,
    size = TABLE_DEFAULTS.size,
    fullWidth = TABLE_DEFAULTS.fullWidth,
    className = TABLE_DEFAULTS.className
}: TableProps): JSX.Element => {
    // Construction des classes CSS
    const classes = classNames(
        styles.table,
        `component-${align}`,
        `component-${variant}`,
        `component-${size}`,
        fullWidth && styles.fullWidth,
        className
    )

    

    return (
        <table className={classes}>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                        {rowData.map((cellData, cellIndex) => (
                            <td key={cellIndex}>{cellData}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;