/**
 * @file Configuration générale du composant
 * @module features/documentation/data/Modal/config
 * @description
 * Contient les constantes et configurations globales du showcase
 * 
 * @version 1.0.0
 * @since 2025-11-13
 * @author Seb-Prod
 */

export const componentName = "Modal";

export const description = `
Composant **Modal** servant de fenêtre modale de superposition.

Ce composant est essentiel pour afficher du contenu au premier plan, **bloquant l'interaction** avec l'arrière-plan (overlay). Il gère le rendu, l'apparence et l'accessibilité :
- **Gestion du rendu** : Il est rendu conditionnellement par le parent (via la prop \`isOpen\`, non visible dans l'implémentation fournie, mais implicite) et gère ses propres états d'animation (\`opening\`/\`closing\` basés sur \`isClosing\`).
- **Styles Dynamiques** : Le style de la modale est configurable via les props
- **Fermeture par Overlay** : Par défaut, un clic sur l'arrière-plan semi-transparent (\`overlay\`) déclenche la fonction \`onClose\`.

> **⚠️ Note :** L'implémentation utilise un \`forwardRef\` pour permettre la manipulation de la modale elle-même si nécessaire (par exemple, pour le focus trap).
`;