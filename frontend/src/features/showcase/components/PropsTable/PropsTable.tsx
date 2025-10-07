import type { JSX } from "react";
import styles from "./PropsTable.module.css";
import type { PropInfo } from "../../types/propsInfo";

type PropsTableProps = {
  props: PropInfo[];
};

const PropsTable =({ props }: PropsTableProps): JSX.Element =>{
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Props</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
            <th>Description</th>
            <th>Requis</th>
            <th>Défaut</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td><code>{prop.name}</code></td>
              <td><code>{prop.type}</code></td>
              <td>{prop.description}</td>
              <td>{prop.required ? "✅" : "❌"}</td>
              <td>{prop.default ? <code>{prop.default}</code> : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropsTable;
