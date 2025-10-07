import type { JSX, ReactNode } from "react";
import styles from "./ShowcaseSection.module.css";
import { Heading } from "@/components/ui";

type ShowcaseSectionProps = {
  title:string,
  description:string
  children: ReactNode
};

const ShowcaseSection =({ title, description, children }: ShowcaseSectionProps): JSX.Element =>{
  return (
    <div className={styles.container}>
      <Heading variant={1}>{title}</Heading>
      <span>{description}</span>
      {children}
    </div>
  );
}

export default ShowcaseSection;