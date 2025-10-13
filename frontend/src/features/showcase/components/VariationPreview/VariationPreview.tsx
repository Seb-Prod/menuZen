import { type JSX } from "react";
import styles from "./VariationPreview.module.css";
import CodeBlock from "../CodeBlock";
import { Heading, Text } from "@/components/ui";
import type { Combination, Params } from "../../utils/showcaseHelpers";
import Select from "@/components/ui/Select";

type VariationPreviewProps<T extends Params> = {
    params: T;
    renderPreview: (combo: Combination<T>) => JSX.Element;
    selectedParams: Combination<T>;
    setSelectedParams: (combo: Combination<T>) => void;
    generateCode: (combo: Combination<T>) => string;
};

/**
 * Composant de prévisualisation qui gère la sélection des paramètres et l'affichage du code.
 * L'état est maintenant géré par le parent, rendant ce composant plus simple.
 */
const VariationPreview = <T extends Params>({
    params,
    selectedParams,
    setSelectedParams,
    renderPreview,
    generateCode
}: VariationPreviewProps<T>): JSX.Element => {

    return (
        <>
            <Heading variant={3}>Prévisualisation des variations</Heading>
            <div className={styles.container}>

                <div className={styles.paramsSection}>
                    {Object.entries(params).map(([paramName, paramValues]) => (
                        <div key={paramName} className={styles.paramContainer}>
                            <Text>{paramName}</Text>
                            <Select
                                size="small"
                                options={paramValues.map((value) => ({
                                    value: String(value),
                                    label: typeof value === 'boolean' 
                                        ? (value ? 'true' : 'false') 
                                        : String(value)
                                }))}
                                value={String(selectedParams[paramName])}
                                onChange={(newValueStr) => {
                                    let newValue: unknown = newValueStr;

                                    if (newValueStr === "true") {
                                        newValue = true;
                                    } else if (newValueStr === "false") {
                                        newValue = false;
                                    }

                                    setSelectedParams({
                                        ...selectedParams,
                                        [paramName]: newValue
                                    } as Combination<T>);
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.preview}>
                    <CodeBlock
                        code={generateCode(selectedParams)}
                        language="tsx"
                    />
                    <div className={styles.examplePreview}>
                        {renderPreview(selectedParams)}
                    </div>

                </div>

            </div>
        </>
    );
};

export default VariationPreview;