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
    openingTag += "\n" + propsArray.map(p => `${"  ".repeat(indentLevel + 1)}${p}`).join("\n") + `\n${indent}>`;
  } else {
    openingTag += hasChildren ? ">" : "/>";
  }

  // Si pas d'enfants, on retourne la balise auto-fermante
  if (!hasChildren) {
    return openingTag;
  }

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

  return `${openingTag}\n${childrenContent}\n${closingTag}`;
};