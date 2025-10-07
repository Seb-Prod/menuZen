import type { JSX } from "react";
import CodeBlock from "../CodeBlock";

type UsageExampleProps = {
  code: string;
};

const UsageExample = ({ code }: UsageExampleProps): JSX.Element => {
  return (
    <div>
      <h3>Exemple d'utilisation</h3>
      <CodeBlock code={code} language="tsx" />
    </div>
  );
};

export default UsageExample;