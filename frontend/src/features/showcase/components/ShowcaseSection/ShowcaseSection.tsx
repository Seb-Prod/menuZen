import type { JSX, ReactNode } from "react";
import styles from "./ShowcaseSection.module.css";

type ShowcaseSectionProps = {
  title:string,
  description:string
  children: ReactNode
};

const ShowcaseSection =({ title, description, children }: ShowcaseSectionProps): JSX.Element =>{
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <span>{description}</span>
      {children}
    </div>
  );
}

export default ShowcaseSection;