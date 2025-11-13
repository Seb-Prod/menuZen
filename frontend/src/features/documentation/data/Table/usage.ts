/**
 * @file Exemples d'utilisation du composant
 * @module features/documentation/data/Table/usage
 * @description
 * Code examples et documentation d'usage
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

export const usageExample = 
`// Tableau simple avec des données textuelles
import Table from "@/components/ui/Table";

export default function MyComponent() {
  return (
    <Table
      variant="primary"
      headers={['Produit', 'Prix', 'Stock']}
      data={[
        ['Clavier', '49.99€', '15'],
        ['Souris', '29.99€', '8']
      ]}
    />
  );
}

// Tableau avec des composants React dans les cellules
import Table from "@/components/ui/Table";

export default function MyComponent() {
  return (
    <Table
      variant="primary"
      headers={['Utilisateur', 'Statut', 'Actions']}
      data={[
        [
          <strong>Jean Dupont</strong>,
          <span className="badge">Actif</span>,
          <Button size="small">Modifier</Button>
        ]
      ]}
    />
  );
}
`;