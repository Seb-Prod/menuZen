import { Heading } from "@/components/ui";
import type { JSX } from "react";
import styles from './DocHeader.module.css';
import ReactMarkdown from 'react-markdown';

export type DocHeaderProps = {
    title: string;
    description?: string;
}

const DocHeader = ({ title, description }: DocHeaderProps): JSX.Element => {
    return (
        <header className={styles.header}>
            <Heading variant={1}>{title}</Heading>
            {description && <ReactMarkdown>{description}</ReactMarkdown>}
        </header>
    );
}

export default DocHeader;