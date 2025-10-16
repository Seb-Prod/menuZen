// DocHeader.tsx
import { Heading, Text } from "@/components/ui";
import type { JSX } from "react";
import styles from './DocHeader.module.css';

export type DocHeaderProps = {
    title: string;
    description?: string;
}

const DocHeader = ({ title, description }: DocHeaderProps): JSX.Element => {
    return (
        <header className={styles.header}>
            <Heading variant={1}>{title}</Heading>
            {description && <Text className={styles.description}>{description}</Text>}
        </header>
    );
}

export default DocHeader;