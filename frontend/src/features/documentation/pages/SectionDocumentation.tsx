import type { JSX } from "react";

interface SectionDocumentationProps {
  title: string;
  content: JSX.Element;
}

const SectionDocumentation = ({ title, content }: SectionDocumentationProps): JSX.Element => (
  <div style={{ padding: "20px" }}>
    <h1 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}>{title}</h1>
    {content}
  </div>
);

export default SectionDocumentation;