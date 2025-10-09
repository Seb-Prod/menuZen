import type { JSX } from "react";
import CodeBlock from "../CodeBlock";
import { Heading } from "@/components/ui";

type UsageExampleProps = {
  code: string;
};

/**
 * Composant React pour afficher un exemple d'utilisation de code dans un bloc de code.
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.code - Le code à afficher dans le bloc de code.
 * @example
 * ```tsx
 * const exampleCode = `import React from 'react'; ...`;
 * <UsageExample code={exampleCode} />
 * ```
 */

const UsageExample = ({ code }: UsageExampleProps): JSX.Element => {
  return (
    <div>
      <Heading variant={3}>Exemple d'utilisation</Heading>
      <CodeBlock code={code} language="tsx" />
    </div>
  );
};

export default UsageExample;