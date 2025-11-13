/**
 * @file Configuration générale du composant
 * @module features/documentation/data/Footer/config
 * @description
 * Contient les constantes et configurations globales du showcase
 * 
 * @version 1.0.0
 * @since 2025-11-13
 * @author Seb-Prod
 */

export const componentName = "Footer";

export const description = `
Composant **Footer** servant de pied de page pour l'application.

Ce composant affiche les informations essentielles en bas de page :
- **Informations du projet** : Nom et description de l'application
- **Liens de contact** : Email, LinkedIn et GitHub avec icônes
- **Mentions légales** : Lien vers les mentions légales et copyright

Le composant est entièrement personnalisable via ses props et s'adapte automatiquement aux différentes tailles d'écran. Les liens de contact ne s'affichent que s'ils sont fournis, permettant une configuration flexible selon les besoins.

> **💡 Astuce :** Le Footer utilise automatiquement l'année courante pour le copyright, mais vous pouvez spécifier une année personnalisée via la prop \`year\`.
`;