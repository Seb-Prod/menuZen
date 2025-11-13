/**
 * @file Composant Table.
 * @module components/ui/Table
 */

import type { JSX } from 'react';
import styles from "./Table.module.css"
import { DEFAULTS, type Props } from './Table.types';
import { classNames } from '@/utils/object';

/**
 * Composant Table - Tableau HTML réutilisable et personnalisable.
 * 
 * Permet d'afficher des données tabulaires avec des en-têtes personnalisables
 * et supporte différentes variantes de style, tailles et options d'alignement. 
 * Le contenu des cellules peut être n'importe quel élément React (texte, composants, etc.).
 * Le tableau est responsive et s'adapte automatiquement aux petits écrans (≤660px)
 * en affichant les données en mode liste verticale avec les en-têtes de colonnes visibles.
 * 
 * @component
 * @version 1.2.0
 * @since 2025-10-22
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
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
 * // Tableau pleine largeur en grande taille avec composants React
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
 * @see {@link Props}
 * @see {@link DEFAULTS}
 */
const Table = (inputProps: Props): JSX.Element => {
    const props = { ...DEFAULTS, ...inputProps };
    const { headers, data, align, variant, size, fullWidth, className } = props;
    // Construction des classes CSS
    const classes = classNames(
        styles.table,
        `component-${align}`,
        `component-${variant}`,
        `component-${size}`,
        fullWidth && styles.fullWidth,
        className
    );

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
                            <td
                                key={cellIndex}
                                data-label={headers[cellIndex]}
                            >
                                {cellData}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;