// src/utils/codeGenerator.ts

/**
 * Génère la chaîne de code JSX pour un composant à partir d'un tableau de propriétés conditionnelles.
 * Les propriétés sont incluses uniquement si leur expression est "truthy".
 *
 * @param componentName Le nom du composant (ex: "Button", "Spinner").
 * @param propExpressions Un tableau de chaînes de caractères qui représentent soit:
 * - Une prop de la forme 'propName="value"' (pour les valeurs non par défaut).
 * - Le nom d'une prop booléenne (ex: 'fullWidth') si elle est vraie.
 * - `false` ou `null` pour les props à ignorer.
 * @param hasChildren Indique si le composant doit avoir des enfants (ex: <Button>Example</Button>).
 * @returns La chaîne de code JSX formatée.
 */
export const generateCodeString = (
  componentName: string,
  propExpressions: (string | false | null | undefined)[],
  hasChildren: boolean = false
): string => {
  const propsArray = propExpressions.filter(Boolean) as string[];
  const props = propsArray.join('\n  ');
  
  // Définit le contenu interne (enfants)
  const exampleText = hasChildren ? '  Example\n' : '';

  // Définit la fin de la balise ouvrante (soit '>' si il y a des enfants, soit '/>' si il n'y en a pas)
  const tagEnd = hasChildren ? '>' : '/>';
  
  // Définit la balise de fermeture complète (vide si auto-fermante)
  const closingTag = hasChildren ? `</${componentName}>` : '';

  if (props.length === 0) {
    return `<${componentName}${tagEnd}${exampleText}${closingTag}`;
  }

  return `<${componentName}\n  ${props}\n${tagEnd}\n${exampleText}${closingTag}`;
};