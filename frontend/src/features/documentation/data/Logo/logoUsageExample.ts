/**
 * @file Exemple d'utilisation du composant Logo pour la documentation.
 * @module features/documentation/data/Logo
 */

const logoUsageExample = `import Logo from "@/components/ui/Logo";

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

export default logoUsageExample;