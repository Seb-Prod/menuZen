/**
 * @file Configuration générale du composant
 * @module features/documentation/data/ThemeToggle/config
 * @description
 * Contient les constantes et configurations globales du showcase
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

export const componentName = "ThemeToggle";

export const description = `
Composant **ThemeToggle** permettant de basculer entre les modes de thème de l'application.

Ce composant offre trois modes de fonctionnement :
- **Mode système (auto)** : S'adapte automatiquement aux préférences système de l'utilisateur
- **Mode manuel clair (light)** : Force l'affichage en mode clair
- **Mode manuel sombre (dark)** : Force l'affichage en mode sombre

L'utilisateur peut passer du mode automatique au mode manuel, puis choisir entre les thèmes clair et sombre selon ses préférences. Le choix est généralement persisté pour être restauré lors des prochaines visites.

> **💡 Astuce :** Le mode système est idéal pour respecter automatiquement les préférences de l'utilisateur définies au niveau de son système d'exploitation.
`;