import type { JSX } from "react";
import CodeBlock from "../CodeBlock";
import { Heading } from "@/components/ui";

type UsageExampleProps = {
  code: string;
};

const UsageExample = ({ code }: UsageExampleProps): JSX.Element => {
  return (
    <div>
      <Heading variant={3}>Exemple d'utilisation</Heading>
      <CodeBlock code={code} language="tsx" />
    </div>
  );
};

export default UsageExample;