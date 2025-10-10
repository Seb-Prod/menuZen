import { type JSX } from "react";
import styles from "./VariationPreview.module.css";
import CodeBlock from "../CodeBlock";
import { Heading, Text } from "@/components/ui";
import type { Combination, Params } from "../../utils/showcaseHelpers";

type VariationPreviewProps<T extends Params> = {
    params: T;
    renderPreview: (combo: Combination<T>) => JSX.Element;
    selectedParams: Combination<T>;
    setSelectedParams: (combo: Combination<T>) => void;
    componentName: string;
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
    componentName = 'Component'
}: VariationPreviewProps<T>): JSX.Element => {

    const generateCode = (combo: Combination<T>): string => {
        const propsString = Object.entries(combo)
            .map(([key, value]) => {
                if (typeof value === 'boolean') {
                    return `${key}={${String(value)}}`;
                } else if (typeof value === 'string') {

                    return `${key}="${value}"`;
                }
                return `${key}={${String(value)}}`;
            })
            .join(' ');


        return `<${componentName}\n  ${propsString}\n>\n  example\n</${componentName}>`;
    };

    return (
        <>
        <Heading variant={3}>Prévisualisation des variations</Heading>
        <div className={styles.container}>
            
            <div className={styles.paramsSection}>
                {Object.entries(params).map(([paramName, paramValues]) => (
                    <div key={paramName} className={styles.paramContainer}>
                        <Text>{paramName}</Text>
                        <select
                            value={String(selectedParams[paramName])}
                            onChange={(e) => {
                                let newValue: unknown = e.target.value;

                                if (newValue === "true") {
                                    newValue = true;
                                } else if (newValue === "false") {
                                    newValue = false;
                                }

                                setSelectedParams({
                                    ...selectedParams,
                                    [paramName]: newValue
                                } as Combination<T>);
                            }}
                        >

                            {paramValues.map((value) => (
                                <option
                                    key={String(value)}
                                    value={String(value)}
                                >

                                    {typeof value === 'boolean' ? (value ? 'true' : 'false') : String(value)}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            <div className={styles.codePreview}>
                <CodeBlock
                    code={generateCode(selectedParams)}
                    language="tsx"
                />
                {renderPreview(selectedParams)}
            </div>

        </div>
        </>
        
    );
};

export default VariationPreview;