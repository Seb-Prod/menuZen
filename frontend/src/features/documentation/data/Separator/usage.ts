/**
 * @file Exemples d'utilisation du composant
 * @module features/documentation/data/Separator/usage
 * @description
 * Code examples et documentation d'usage
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

export const usageExample = `import Separator from "@/components/ui/Separator";

export default function MyComponent() {
  return (
    <>
      {/* Séparateur par défaut (horizontal) */}
      <Separator />

      {/* Séparateur horizontal avec espacement large */}
      <Separator spacing="large" />

      {/* Séparateur horizontal épais */}
      <Separator thickness="large" />

      {/* Séparateur avec couleur primaire */}
      <Separator color="primary" />

      {/* Séparateur vertical */}
      <Separator orientation="vertical" />

      {/* Séparateur vertical épais avec couleur */}
      <Separator 
        orientation="vertical" 
        thickness="medium" 
        color="success" 
      />

      {/* Séparateur horizontal fin sans espacement */}
      <Separator 
        thickness="xs" 
        spacing="xs" 
        color="neutral" 
      />

      {/* Séparateur personnalisé complet */}
      <Separator 
        orientation="horizontal"
        thickness="large"
        color="primary"
        spacing="xl"
      />

      {/* Exemple d'utilisation entre sections */}
      <section>
        <h2>Section 1</h2>
        <p>Contenu de la première section</p>
      </section>

      <Separator spacing="large" color="neutral" />

      <section>
        <h2>Section 2</h2>
        <p>Contenu de la deuxième section</p>
      </section>

      {/* Exemple avec séparateur vertical dans un layout flex */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div>Colonne 1</div>
        <Separator orientation="vertical" spacing="medium" />
        <div>Colonne 2</div>
      </div>
    </>
  );
}`;
