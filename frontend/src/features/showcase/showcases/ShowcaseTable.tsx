import { TABLE_SWOCASE_CONSTANTS } from "@/components/ui/Table/Table.types";
import type { Combination } from "../utils/showcaseHelpers";
import type { JSX } from "react";
import { generateCodeString } from "../utils";
import { ShowcaseComponent } from "../components";
import { tableProps, tableUsageExample } from "./data/Table";
import Table from "@/components/ui/Table";

type TableShowcaseCombo = Combination<typeof TABLE_SWOCASE_CONSTANTS>;

const renderTablePreview = (combo: TableShowcaseCombo): JSX.Element => (
  <Table
    variant={combo.variant}
    headers={["Produit", "Prix", "Stock"]}
    align={combo.align}
    fullWidth={combo.fullWidth}
    data={[
      ['clavier', '49.99€', '15'],
      ['souris', '29.99€', '8']
    ]}
  />
)

const generateTableCode = (combo: TableShowcaseCombo): string => {
  const propExpressions = [
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.align !== "center" && `align="${combo.align}"`,
    combo.fullWidth && `fullWidth`,
    `headers={["Produit", "Prix", "Stock"]}`,
    `data={[
    ['Clavier', '49.99€', '15'],
    ['Souris', '29.99€', '8']
  ]}`
  ];

  return generateCodeString("Table", propExpressions, false);
}

const ShowcaseTable = (): JSX.Element => {
  return (
    <ShowcaseComponent
      title="Table"
      description="Tableau HTML réutilisable pour afficher des données tabulaires avec en-têtes personnalisables et différentes variantes de style."
      propsData={tableProps}
      usageExample={tableUsageExample}
      params={TABLE_SWOCASE_CONSTANTS}
      renderPreview={renderTablePreview}
      generateCode={generateTableCode}
    />
  );
}

export default ShowcaseTable;