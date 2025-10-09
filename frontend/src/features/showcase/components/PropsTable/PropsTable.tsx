import type { JSX } from "react";
import styles from "./PropsTable.module.css";
import type { PropInfo } from "../../types/propsInfo";
import { Heading } from "@/components/ui";
import { Table } from "@/components/ui/Table";

type PropsTableProps = {
  props: readonly PropInfo[];
};

const PropsTable =({ props }: PropsTableProps): JSX.Element =>{
  const headers = ['Nom','Type', 'Description', 'Requis', 'Default'];

  const data = props.map((prop) => [
    <code>{prop.name}</code>,
    <code>{prop.type}</code>,
    prop.description,
    prop.required ? "✅" : "❌",
    prop.default ? <code>{prop.default}</code> : "-",
  ]);

  return (
    <div className={styles.container}>
      <Heading variant={3}>Props</Heading>
      <Table headers={headers} data={data}></Table>
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
