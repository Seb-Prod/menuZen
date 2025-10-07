// src/ui-showcase/showcase/components/ShowcaseTable.tsx
import type { JSX } from "react";
import CodeBlock from "../CodeBlock";
import { Heading } from "@/components/ui";
type ShowcaseTableProps = {
  data: {
    label: string;
    code: string;
    preview: JSX.Element;
  }[];
};

const ShowcaseTable = ({ data }: ShowcaseTableProps): JSX.Element => {
  return (
    <div>
      <Heading variant={3}>Aperçus</Heading>
      <table className="showcase-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Aperçu</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <CodeBlock code={item.code} language="tsx" />
              </td>
              <td>
                {item.preview}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default ShowcaseTable;