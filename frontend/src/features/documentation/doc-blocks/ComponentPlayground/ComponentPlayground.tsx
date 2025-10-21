/**
 * @file Composant ComponentPlayground pour la prévisualisation interactive de composants.
 * @module features/documentation/doc-blocks/ComponentPlayground
 */

import { type JSX } from "react";
import styles from "./ComponentPlayground.module.css";
import CodeBlock from "../CodeBlock";
import { Heading, Text } from "@/components/ui";
import type { Combination, Params } from "../../utils/showcaseHelpers";
import Select from "@/components/ui/Select";

type ComponentPlaygroundProps<T extends Params> = {
    /** Les paramètres de variation disponibles pour le composant. */
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
 * Composant ComponentPlayground - Espace interactif de test de composants.
 * 
 * Permet de manipuler dynamiquement les props d'un composant via des contrôles
 * (Select) et d'afficher en temps réel le code généré ainsi que le rendu visuel.
 * L'état est géré par le composant parent (DocPageContainer).
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 * 
 * @template T - Type des paramètres de variation étendant Params.
 * 
 * @param {ComponentPlaygroundProps<T>} props - Les propriétés du composant.
 * @param {T} [props.params] - Objet définissant les paramètres disponibles et leurs valeurs possibles.
 * @param {Function} props.renderPreview - Fonction retournant le JSX du composant à prévisualiser selon la combinaison de props.
 * @param {Combination<T>} props.selectedParams - Combinaison actuelle des paramètres sélectionnés.
 * @param {Function} props.setSelectedParams - Callback pour mettre à jour la combinaison de paramètres.
 * @param {Function} props.generateCode - Fonction générant le code TSX correspondant à la combinaison actuelle.
 * 
 * @returns {JSX.Element} L'interface du playground avec contrôles, code et prévisualisation.
 * 
 * @example
 * // Utilisation basique avec paramètres de variation
 * <ComponentPlayground
 *   params={{ variant: ['primary', 'secondary'], size: ['small', 'large'] }}
 *   renderPreview={(combo) => <Button {...combo}>Test</Button>}
 *   selectedParams={{ variant: 'primary', size: 'small' }}
 *   setSelectedParams={setParams}
 *   generateCode={(combo) => `<Button variant="${combo.variant}" size="${combo.size}">Test</Button>`}
 * />
 * 
 * @example
 * // Mode statique sans paramètres
 * <ComponentPlayground
 *   renderPreview={(combo) => <Button>Statique</Button>}
 *   selectedParams={{}}
 *   setSelectedParams={() => {}}
 *   generateCode={() => '<Button>Statique</Button>'}
 * />
 * 
 * @see {@link ComponentPlaygroundProps}
 * @see {@link Combination}
 * @see {@link Params}
 */
const ComponentPlayground = <T extends Params>({
    params,
    selectedParams,
    setSelectedParams,
    renderPreview,
    generateCode
}: ComponentPlaygroundProps<T>): JSX.Element => {
    
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
            <div className={styles.container}>

                <div className={styles.paramsSection}>
                    {Object.entries(params).map(([paramName, paramValues]) => (
                        <div key={paramName} className={styles.paramContainer}>
                            <Text>{paramName}</Text>
                            <Select
                                size="small"
                                fullWidth
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

export default ComponentPlayground;