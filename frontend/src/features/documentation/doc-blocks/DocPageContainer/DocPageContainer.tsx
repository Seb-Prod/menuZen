// DocPageContainer.tsx
import type { JSX, ReactElement } from "react";
import styles from './DocPageContainer.module.css';
import type { DocHeaderProps } from "../DocHeader/DocHeader";
import DocHeader from "../DocHeader/DocHeader";

type DocPageContainerProps = {
    title:string;
    description?:string;
    children?: ReactElement<DocHeaderProps> | ReactElement<DocHeaderProps>[];
}

const DocPageContainer = ({ title, description='', children }: DocPageContainerProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <DocHeader title={title} description={description}/>
            <hr/>
           {children}
        </div>
    );
}

export default DocPageContainer;