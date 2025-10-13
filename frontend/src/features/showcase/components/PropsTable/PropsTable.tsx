import type { JSX } from "react";
import styles from "./PropsTable.module.css";
import type { PropInfo } from "../../types/propsInfo";
import { Heading, Table, Text} from "@/components/ui";

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

  const showTable = data && data.length > 0;

  return (
    <div className={styles.container}>
      <Heading variant={3}>Props</Heading>
      {showTable ? (
        // Affiche la table si 'data' contient des éléments
        <Table headers={headers} data={data} className={styles.table} />
      ) : (
        // Affiche un message alternatif si 'data' est vide ou null/undefined
        <Text>Aucune propriété n'est disponible pour ce composant.</Text>
      )}
    </div>
  );
}

export default PropsTable;
