import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cleanIndentFunction } from '../../utils/cleanIndentFunction';
import type { JSX } from 'react';

type CodeBlockProps = {
  code: string;
  language: string;
  cleanIndent?: boolean;
}

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