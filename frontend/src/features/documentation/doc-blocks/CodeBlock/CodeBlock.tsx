/**
 * @file Composant CodeBlock pour l'affichage de code source avec coloration syntaxique.
 * @module features/documentation/doc-blocks/CodeBlock
 */

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { JSX } from 'react';
import { cleanIndentFunction } from '../../utils';

type CodeBlockProps = {
  /** Code source à afficher. */
  code: string;
  /** Langage de programmation pour la coloration syntaxique. */
  language: string;
  /** Si true, nettoie l'indentation excessive du code. */
  cleanIndent?: boolean;
}

/**
 * Composant CodeBlock - Affichage de code avec coloration syntaxique.
 * 
 * Utilise react-syntax-highlighter avec le thème VS Code Dark Plus pour afficher
 * du code formaté avec coloration syntaxique. Peut automatiquement nettoyer
 * l'indentation excessive pour un affichage optimal.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 *
 * @param {CodeBlockProps} props - Les propriétés du composant.
 * @param {string} props.code - Code source brut à afficher.
 * @param {string} props.language - Identifiant du langage pour Prism (tsx, javascript, python, etc.).
 * @param {boolean} [props.cleanIndent=true] - Active le nettoyage automatique de l'indentation.
 *
 * @returns {JSX.Element} Le bloc de code formaté avec coloration syntaxique.
 *
 * @example
 * // Code JavaScript simple
 * <CodeBlock 
 *   code="const add = (a, b) => a + b;" 
 *   language="javascript" 
 * />
 *
 * @example
 * // Composant React avec nettoyage d'indentation
 * <CodeBlock 
 *   code={`
 *     function Button() {
 *       return <button>Click</button>;
 *     }
 *   `}
 *   language="tsx"
 *   cleanIndent={true}
 * />
 * 
 * @example
 * // Code Python sans nettoyage
 * <CodeBlock 
 *   code="def hello():\n    print('Hello')" 
 *   language="python"
 *   cleanIndent={false}
 * />
 *
 * @see {@link CodeBlockProps}
 * @see {@link cleanIndentFunction}
 */
const CodeBlock = ({ code, language, cleanIndent: shouldClean = true }: CodeBlockProps): JSX.Element => {
  const processedCode = shouldClean ? cleanIndentFunction(code) : code;
  
  return (
    <SyntaxHighlighter 
      language={language} 
      style={vscDarkPlus}
      customStyle={{
        borderRadius: '8px',
        padding: '16px',
        margin: '16px 10px'
      }}
    >
      {processedCode}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;