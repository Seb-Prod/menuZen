import type { JSX } from "react";
import styles from "./DocProps.module.css";
import stylesMarkdown from "../ReactMarkdown.module.css";
import type { PropInfo } from "../../types/propsInfo";
import { Table, Text } from "@/components/ui";
import ReactMarkdown from "react-markdown";

type PropsTableProps = {
  description?: string;
  props: readonly PropInfo[];
};

const DocProps = ({ props, description }: PropsTableProps): JSX.Element => {
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
        <Table headers={headers} data={data} className={styles.table} />
      ) : (
        <Text>Aucune propriété n'est disponible pour ce composant.</Text>
      )}
    </div>
  );
}

export default DocProps;
