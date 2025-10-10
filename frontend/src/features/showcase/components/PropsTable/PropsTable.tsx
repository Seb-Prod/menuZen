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
    </div>
  );
}

export default PropsTable;
