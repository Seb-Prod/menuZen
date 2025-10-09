// src/ui-showcase/showcase/components/ShowcaseTable.tsx
import type { JSX } from "react";
import CodeBlock from "../CodeBlock";
import { Heading } from "@/components/ui";
import { Table } from "@/components/ui/Table";

type ShowcaseTableProps = {
  data: {
    group: string; // 🆕 ajouté
    label: string;
    code: string;
    preview: JSX.Element;
  }[];
};

const ShowcaseTable = ({ data }: ShowcaseTableProps): JSX.Element => {
  const headers = ["Paramètre", "Code", "Aperçu"]; // Définissez les en-têtes du tableau
  const rows = data.map((item, index) => [
    <span key={`group-${index}`} className="font-semibold text-sm text-gray-700">{item.group}</span>,
    <CodeBlock key={`code-${index}`} code={item.code} language="tsx" />,
    item.preview,
  ]); // Créez les lignes du tableau en utilisant ReactNode[] pour chaque cellule

  return (
    <div>
      <Heading variant={3}>Aperçus</Heading>
      <Table headers={headers} data={rows} /> {/* Utilisez le composant Table */}
    </div>
  );
};

export default ShowcaseTable;