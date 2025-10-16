import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { JSX } from 'react';
import { cleanIndentFunction } from '../../utils';

type CodeBlockProps = {
  code: string;
  language: string;
  cleanIndent?: boolean;
}

/**
 * Un composant fonctionnel pour afficher du code source formaté.
 * @component
 *
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.code - Le code source à afficher.
 * @param {string} props.language - Le langage de programmation utilisé dans le code source.
 * @param {boolean} [props.cleanIndent=true] - Si le code doit être nettoyé et reformaté pour enlever l'indentation inutile.
 *
 * @example
 * const exampleCode = `const add = (a, b) => a + b;`;
 * <CodeBlock code={exampleCode} language="javascript" cleanIndent={true} />
 *
 * @returns {JSX.Element} Le composant SyntaxHighlighter avec le code source formaté.
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