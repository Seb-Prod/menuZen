/**
 * @file Exemples d'utilisation du composant Button
 * @module features/documentation/data/Button/usage
 * @description
 * Code examples et documentation d'usage
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

export const buttonUsageExample = `import Button from "@/components/ui/Button";

export default function MyComponent() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Button 
      size="medium" 
      variant="primary"
      onClick={handleClick}
    >
      Click me
    </Button>
  );
}`;