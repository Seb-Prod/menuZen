// DocPageContainer.tsx
import { useState, type JSX, type ReactNode } from "react";
import styles from './DocPageContainer.module.css';
import DocHeader from "../DocHeader/DocHeader";
import { Accordion, AccordionSection } from "@/components/ui/Accordion";
import UsageExample from "../UsageExample";
import type { Combination, Params } from "../../utils/showcaseHelpers";
import VariationPreview from "../VariationPreview";

type DocPageContainerProps<T extends Params> = {
    title: string;
    description: string;
    children?: ReactNode;
    usageExample: string;
    params: T;
    renderPreview: (combo: Combination<T>) => JSX.Element;
    generateCode: (combo: Combination<T>) => string;
}

const DocPageContainer = <T extends Params>({ title, description, usageExample, children, params, renderPreview, generateCode }: DocPageContainerProps<T>): JSX.Element => {
    const initialParams = params
        ? (Object.fromEntries(
            Object.keys(params).map((key) => [key, params[key][0]])
        ) as Combination<T>)
        : ({} as Combination<T>);

    const [selectedParams, setSelectedParams] =
        useState<Combination<T>>(initialParams);

    return (
        <div className={styles.container}>
            <DocHeader title={title} description={description} />
            <hr />
            <Accordion variant="info">
                {children ? children : <AccordionSection label="Défaut" />}
                <AccordionSection label="Example d'utilisation">
                    <UsageExample code={usageExample}></UsageExample>
                </AccordionSection>
                <AccordionSection>
                    <VariationPreview
                        params={params}
                        renderPreview={renderPreview}
                        selectedParams={selectedParams}
                        setSelectedParams={setSelectedParams}
                        generateCode={generateCode}
                    />
                </AccordionSection>
            </Accordion>
        </div>
    );
}

export default DocPageContainer;