/**
 * Génère la chaîne de code JSX pour un composant, avec support d'enfants imbriqués
 * et indentation correcte.
 *
 * @param componentName Nom du composant (ex: "Accordion")
 * @param propExpressions Tableau de props conditionnelles (ex: 'size="small"')
 * @param children Chaîne ou tableau de chaînes représentant les enfants (générés par la même fonction)
 * @param indentLevel Niveau d'indentation (utilisé récursivement)
 */
export const generateCodeString = (
  componentName: string,
  propExpressions: (string | false | null | undefined)[] = [],
  children?: string | string[],
  indentLevel: number = 0
): string => {
  const indent = "  ".repeat(indentLevel);
  const propsArray = propExpressions.filter(Boolean) as string[];

  const hasChildren =
    (Array.isArray(children) && children.length > 0) ||
    (typeof children === "string" && children.trim().length > 0);

  // Construire la ligne d'ouverture avec props (si présentes)
  let openingTag = `${indent}<${componentName}`;

  if (propsArray.length > 0) {
    // Si des props sont présentes, elles sont listées sur de nouvelles lignes
    openingTag += "\n" + propsArray.map(p => `${"  ".repeat(indentLevel + 1)}${p}`).join("\n");
    
    // CORRECTION : Ajouter la fermeture basée sur la présence d'enfants
    if (hasChildren) {
      openingTag += `\n${indent}>`; // Fermeture normale avec >
    } else {
      openingTag += `\n${indent}/>`; // Balise auto-fermante avec />
    }

  } else {
    // Si aucune prop n'est présente, la logique initiale est correcte
    openingTag += hasChildren ? ">" : "/>";
  }

  // Si pas d'enfants, on retourne immédiatement la balise auto-fermante (déjà construite dans openingTag)
  if (!hasChildren) {
    return openingTag;
  }

  // --- Logique pour les composants avec enfants ---

  // Construire le contenu des enfants avec indentation supplémentaire
  let childrenContent = "";
  const childIndentLevel = indentLevel + 1;
  const childIndent = "  ".repeat(childIndentLevel);

  if (Array.isArray(children)) {
    // Chaque child est déjà une chaîne (souvent produite par generateCodeString)
    childrenContent = children
      .map(child =>
        child
          .split("\n")
          .map(line => (line.trim() ? childIndent + line : line))
          .join("\n")
      )
      .join("\n");
  } else {
    // children est une simple string (texte)
    childrenContent = children
      .split("\n")
      .map(line => (line.trim() ? childIndent + line : line))
      .join("\n");
  }

  const closingTag = `${indent}</${componentName}>`;

  // Retourne la structure complète (ouverture, contenu, fermeture)
  return `${openingTag}\n${childrenContent}\n${closingTag}`;
};