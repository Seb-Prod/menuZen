/**
 * @file Composant de prévisualisation (VariationPreview) pour gérer la sélection des props.
 * @module components/showcase/VariationPreview
 */

import { type JSX } from "react";
import styles from "./VariationPreview.module.css";
import CodeBlock from "../CodeBlock";
import { Heading, Text } from "@/components/ui";
import type { Combination, Params } from "../../utils/showcaseHelpers";
import Select from "@/components/ui/Select";

type VariationPreviewProps<T extends Params> = {
    /** * Les paramètres de variation. Rendu optionnel pour s'aligner sur ShowcaseComponent. 
     * Il est attendu d'être défini ici si le parent l'appelle.
     */
    params?: T;
    /** Fonction de rendu qui retourne le composant à prévisualiser. */
    renderPreview: (combo: Combination<T>) => JSX.Element;
    /** État actuel des paramètres sélectionnés. */
    selectedParams: Combination<T>;
    /** Fonction pour mettre à jour les paramètres sélectionnés. */
    setSelectedParams: (combo: Combination<T>) => void;
    /** Fonction pour générer le code TSX correspondant. */
    generateCode: (combo: Combination<T>) => string;
};

/**
 * Composant de prévisualisation qui gère la sélection des paramètres et l'affichage du code.
 * * L'état est géré par le parent (`ShowcaseComponent`).
 * * @component
 * * @template T - Type des paramètres de variation.
 */
const VariationPreview = <T extends Params>({
    params,
    selectedParams,
    setSelectedParams,
    renderPreview,
    generateCode
}: VariationPreviewProps<T>): JSX.Element => {
    
    // Safety check : bien que le parent doive l'assurer, nous gérons le cas où params est absent.
    if (!params) {
        // En l'absence de paramètres, on n'affiche pas la section de sélection.
        return (
            <>
                <Heading variant={3}>Aperçu Statique</Heading>
                <div className={styles.container}>
                    <div className={styles.preview} style={{ width: '100%' }}>
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
    }
    
    // Si params est présent, on affiche la sélection des variations.
    return (
        <>
            <Heading variant={3}>Prévisualisation des variations</Heading>
            <div className={styles.container}>

                <div className={styles.paramsSection}>
                    {/* Utilisation sécurisée de params */}
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

                                    // Conversion des chaînes "true" / "false" en booléens
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