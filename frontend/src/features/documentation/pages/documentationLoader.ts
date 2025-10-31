/**
 * @file Utilitaires pour le chargement dynamique des showcases
 * @module features/documentation/pages/documentationLoader
 * @version 1.0.0
 * @since 2025-10-29
 * @author Seb-Prod
 */

/**
 * Modules de showcases disponibles (importation dynamique).
 * Charge tous les fichiers correspondant au pattern Showcase*.tsx.
 */
export const documentationModules = import.meta.glob("./showcases/Showcase*.tsx");

/**
 * Extrait les noms des showcases à partir des chemins de fichiers.
 * Supprime le préfixe "Showcase" et l'extension ".tsx" pour obtenir le nom du composant.
 * 
 * @returns {string[]} Liste des noms de composants showcase (ex: ["Button", "Input", "Card"]).
 * 
 * @example
 * // Si les fichiers sont: ShowcaseButton.tsx, ShowcaseInput.tsx
 * getDocumentationNames() // ["Button", "Input"]
 */
export const getDocumentationNames = (): string[] => {
  return Object.keys(documentationModules).map(
    (path) => path.match(/Showcase(.*)\.tsx$/)?.[1] || path
  );
};

/**
 * Charge dynamiquement un composant showcase par son nom.
 * Utilise le lazy loading de Vite pour optimiser les performances.
 * 
 * @param {string} componentName - Nom du composant à charger (ex: "Button", "Input").
 * @returns {(() => Promise<{ default: React.ComponentType }>) | null} 
 *          Fonction de chargement du module ou null si le showcase n'existe pas.
 * 
 * @example
 * const ShowcaseButton = lazy(() => loadDocument("Button"));
 */
export const loadDocument = (componentName: string): (() => Promise<{ default: React.ComponentType }>) | null => {
  const modulePath = `./showcases/Showcase${componentName}.tsx`;
  const loader = documentationModules[modulePath];
  
  return loader
    ? (loader as () => Promise<{ default: React.ComponentType }>)
    : null;
};
