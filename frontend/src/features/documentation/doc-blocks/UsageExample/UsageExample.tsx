/**
 * @file Composant UsageExample pour l'affichage d'exemples de code.
 * @module features/documentation/doc-blocks/UsageExample
 */

import type { JSX } from "react";
import CodeBlock from "../CodeBlock";

type UsageExampleProps = {
  /** Code source à afficher dans le bloc de code. */
  code: string;
};

/**
 * Composant UsageExample - Affichage d'exemples de code.
 * 
 * Wrapper autour de CodeBlock pour présenter des exemples d'utilisation
 * de composants au format TSX dans les pages de documentation.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 * 
 * @param {UsageExampleProps} props - Les propriétés du composant.
 * @param {string} props.code - Code source TSX à afficher avec coloration syntaxique.
 * 
 * @returns {JSX.Element} Le bloc de code formaté et stylisé.
 * 
 * @example
 * // Exemple simple d'utilisation de composant
 * <UsageExample code="<Button variant='primary'>Click me</Button>" />
 * 
 * @example
 * // Exemple multi-lignes avec imports
 * <UsageExample code={`import { Button } from '@/components/ui';
 * 
 * function App() {
 *   return <Button>Hello</Button>;
 * }`} />
 * 
 * @see {@link UsageExampleProps}
 * @see {@link CodeBlock}
 */
const UsageExample = ({ code }: UsageExampleProps): JSX.Element => {
  return (
    <div>
      <CodeBlock code={code} language="tsx" />
    </div>
  );
};

export default UsageExample;