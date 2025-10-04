import { TEMPLATE_CONFIGS } from "./templateUtils/index.js";

export function validateParams(name, componentPath, type) {
  if (!name || typeof name !== 'string') {
    throw new Error('Le nom du composant est requis et doit être une chaîne de caractères.');
  }

  if (!componentPath || typeof componentPath !== 'string') {
    throw new Error('Le chemin du composant est requis et doit être une chaîne de caractères.');
  }

  const supportedTypes = Object.keys(TEMPLATE_CONFIGS);
  if (!supportedTypes.includes(type)) {
    throw new Error(`Type de composant non supporté : ${type}. Types disponibles : ${supportedTypes.join(', ')}`);
  }
}