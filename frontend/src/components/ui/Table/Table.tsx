import type { JSX, ReactNode } from 'react';
import styles from "./Table.module.css"
import { } from "./Table.types";

type TableProps = {
    headers: string[];
    data: ReactNode[][]
}

const Table = ({ headers, data }: TableProps): JSX.Element => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((rowData, rowIndex) => ( // Mapper sur le tableau de données pour générer une balise tr pour chaque ligne
                    <tr key={rowIndex}>
                        {rowData.map((cellData, cellIndex) => ( // Mapper sur le sous-tableau pour générer une balise td pour chaque cellule
                            <td key={cellIndex} className={styles.dataCell}>{cellData}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;