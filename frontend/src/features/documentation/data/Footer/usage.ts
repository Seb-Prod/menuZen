/**
 * @file Exemples d'utilisation du composant
 * @module features/documentation/data/Footer/usage
 * @description
 * Code examples et documentation d'usage
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

export const usageExample = `import ChevronIcon from "@/components/layout/Footer";

export default function MyComponent() {
  return (
    <Footer 
      variant="primary"
      type="chevron" 
      isOpen={isOpen}
      ariaLabelOpen="Fermer le menu"
      ariaLabelClose="Ouvrir le menu"
    />
  );
}`;