import type { JSX } from "react";

export const SECTION_KEYS = {
  THEME: "__SECTION_THEME__",
  UI: "__SECTION_UI__",
  PROJECTS: "__SECTION_PROJECTS__",
};

export const UI_CONTENT: JSX.Element = (
  <>
    <p>
      Documentation technique complète des composants UI atomiques et réutilisables. 
      Chaque composant suit une architecture modulaire stricte avec TypeScript pour la sécurité des types 
      et CSS Modules pour l'isolation des styles.
    </p>
    <ul>
      <li><strong>Structure :</strong> Chaque composant comprend trois fichiers principaux : 
        <code>Component.tsx</code> (logique), <code>Component.module.css</code> (styles isolés), 
        et <code>Component.types.ts</code> (typage TypeScript).
      </li>
      <li><strong>Convention :</strong> Utilisation systématique de CSS Modules pour éviter les conflits de styles 
        et TypeScript pour garantir la cohérence des props.
      </li>
      <li><strong>Composants disponibles :</strong> Button, Heading, Input, Card, Badge et plus encore.</li>
    </ul>
  </>
);

export const PROJECTS_CONTENT: JSX.Element = (
  <>
    <p>
      Composants d'organisation structurels et modèles de mise en page pour construire 
      des interfaces cohérentes et maintenables. Ces composants définissent l'architecture 
      globale de l'application.
    </p>
    <ul>
      <li>
        <strong>Page :</strong> Conteneur principal gérant la structure globale de chaque vue, 
        incluant l'en-tête, le contenu principal et le pied de page.
      </li>
      <li>
        <strong>SideBar :</strong> Panneau de navigation latéral persistant offrant un accès rapide 
        aux différentes sections de l'application avec support du responsive design.
      </li>
      <li>
        <strong>Layout :</strong> Système de grille flexible pour organiser le contenu de manière 
        responsive et accessible.
      </li>
    </ul>
  </>
);

export const THEME_CONTENT: JSX.Element = (
  <>
    <p>
      Documentation complète du Design System incluant la palette de couleurs, la typographie, 
      les espacements et les tokens de design. Ce système garantit la cohérence visuelle 
      et l'accessibilité à travers toute l'application.
    </p>
    <ul>
      <li><strong>Couleurs :</strong> Palette complète avec variantes (100-900) pour chaque couleur thématique.</li>
      <li><strong>Typographie :</strong> Hiérarchie des titres, tailles de police et poids définis.</li>
      <li><strong>Espacement :</strong> Système d'espacement cohérent basé sur des multiples de 4px.</li>
      <li><strong>Tokens CSS :</strong> Variables CSS personnalisées pour faciliter la maintenance et le theming.</li>
    </ul>
    <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
      <div style={{ 
        width: 120, 
        height: 120, 
        background: "var(--color-primary-500)", 
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold"
      }}>
        Primary
      </div>
      <div style={{ 
        width: 120, 
        height: 120, 
        background: "var(--color-secondary-500)", 
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold"
      }}>
        Secondary
      </div>
      <div style={{ 
        width: 120, 
        height: 120, 
        background: "var(--color-success-500)", 
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold"
      }}>
        Success
      </div>
      <div style={{ 
        width: 120, 
        height: 120, 
        background: "var(--color-warning-500)", 
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold"
      }}>
        Warning
      </div>
    </div>
  </>
);