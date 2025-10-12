/**
 * @file Composant Table.
 * @module components/ui/Table
 */

import type { JSX } from 'react';
import styles from "./Table.module.css"
import { TABLE_DEFAULTS, type TableProps } from './Table.types';

/**
 * Composant Table - Tableau HTML réutilisable et personnalisable.
 * 
 * Permet d'afficher des données tabulaires avec des en-têtes personnalisables
 * et supporte différentes variantes de style et options d'alignement. 
 * Le contenu des cellules peut être n'importe quel élément React (texte, composants, etc.).
 * 
 * @component
 * 
 * @param {TableProps} props - Les propriétés du composant.
 * @param {string[]} props.headers - Tableau des libellés d'en-têtes de colonnes.
 * @param {React.ReactNode[][]} props.data - Tableau bidimensionnel contenant les données des cellules (lignes × colonnes).
 * @param {TableVariant} [props.variant='primary'] - Schéma de couleur du tableau (primary, secondary).
 * @param {TableAlign} [props.align='center'] - Alignement horizontal du tableau (left, center, right).
 * @param {boolean} [props.fullWidth=false] - Si true, le tableau prend toute la largeur disponible.
 * @param {string} [props.className=''] - Classes CSS personnalisées supplémentaires.
 * 
 * Les types détaillés sont définis dans {@link TableProps}.
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
 * // Tableau pleine largeur avec des composants React dans les cellules
 * <Table 
 *   fullWidth
 *   headers={['Utilisateur', 'Statut', 'Actions']}
 *   data={[
 *     [
 *       <strong>Jean Dupont</strong>,
 *       <span className="badge">Actif</span>,
 *       <Button size="small">Modifier</Button>
 *     ]
 *   ]}
 * />
 */
const Table = ({ 
    headers, 
    data,
    align = TABLE_DEFAULTS.align,
    variant = TABLE_DEFAULTS.variant,
    fullWidth= TABLE_DEFAULTS.fullWidth,
    className= TABLE_DEFAULTS.className
}: TableProps): JSX.Element => {
    const classes = [
            styles.table,
            styles[variant],
            styles[align],
            fullWidth && styles.fullWidth,
            className
        ].filter(Boolean).join(" ");
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