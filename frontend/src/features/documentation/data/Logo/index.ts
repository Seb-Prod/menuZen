/**
 * @file Point d'entrée pour les métadonnées du composant Logo.
 * @module features/documentation/data/Logo
 */

export { logoProps } from "./logoProps";
export { default as logoUsageExample } from "./logoUsageExample";

/**
 * Nom du composant pour la documentation.
 * @constant
 */
export const componentName = "Logo";

/**
 * Description du composant pour la documentation.
 * @constant
 */
export const logoDescription = `Composant **Logo** affichant l'identité visuelle de l'application. Supporte différentes tailles et positions du texte (en bas ou à droite du logo).

> **📁 Requis :** Placez votre image de logo nommée \`logo.png\` dans le dossier \`src/assets/\` pour que le composant fonctionne correctement.`;