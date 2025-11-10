/**
 * @file Exemples d'utilisation du composant
 * @module features/documentation/data/Logo/usage
 * @description
 * Code examples et documentation d'usage
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

export const logoUsageExample = `import Logo from "@/components/ui/Logo";

export default function MyComponent() {
  return (
    <>
      {/* Logo par défaut */}
      <Logo />

      {/* Logo avec texte personnalisé */}
      <Logo text="Mon Application" />

      {/* Logo en taille large */}
      <Logo size="large" />

      {/* Logo avec texte à droite */}
      <Logo align="right" text="Forge" />

      {/* Logo petit avec texte en bas */}
      <Logo size="small" align="bottom" text="App" />
    </>
  );
}`;