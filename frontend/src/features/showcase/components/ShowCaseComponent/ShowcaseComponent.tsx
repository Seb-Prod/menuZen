import { useState, type JSX } from "react";
import { PropsTable, UsageExample, VariationPreview } from "../../components";
import type { PropInfo } from "../../types/propsInfo";
import { Heading, Text } from "@/components/ui";
import {
    type Params,
    type Combination,
} from "../../utils/showcaseHelpers";

/**
 * Props du composant ShowcaseComponent
 * @template T - Type des paramètres de showcase, doit étendre Params
 */
type ShowcaseComponentProps<T extends Params> = {
    /** Titre principal du showcase */
    title: string;
    /** Description du composant présenté */
    description: string;
    /** Liste des propriétés du composant avec leurs descriptions */
    propsData: readonly PropInfo[];
    /** Exemple de code d'utilisation du composant */
    usageExample: string;
    /** Paramètres à combiner pour générer les variations (ex: { color: ["red", "blue"], size: ["sm", "lg"] }) */
    params: T;
    /** Fonction de rendu qui reçoit une combinaison de paramètres et retourne le composant à prévisualiser */
    renderPreview: (combo: Combination<T>) => JSX.Element;
};

/**
 * Composant de présentation (showcase) pour documenter et visualiser les variations d'un composant UI.
 * 
 * Génère automatiquement toutes les combinaisons possibles des paramètres fournis
 * et affiche un tableau avec les aperçus, le code correspondant et les valeurs des props.
 * 
 * @template T - Type des paramètres de showcase
 * 
 * @example
 * ```tsx
 * <ShowcaseComponent
 *   title="Button"
 *   description="Bouton avec différentes variantes"
 *   propsData={buttonProps}
 *   usageExample={buttonExample}
 *   params={{
 *     variant: ["primary", "secondary"],
 *     size: ["sm", "md", "lg"]
 *   }}
 *   renderPreview={(combo) => (
 *     <Button variant={combo.variant} size={combo.size}>
 *       Click me
 *     </Button>
 *   )}
 * />
 * ```
 * 
 * @param props - Les propriétés du composant
 * @returns Un élément JSX contenant la documentation complète du composant
 */
const ShowcaseComponent = <T extends Params>({
    title,
    description,
    propsData,
    usageExample,
    params,
    renderPreview,
}: ShowcaseComponentProps<T>): JSX.Element => {
    
const [selectedParams, setSelectedParams] = useState(
        Object.fromEntries(
            Object.keys(params).map((key) => [key, params[key][0]])
        ) as Combination<T>
    );

    // ✨ 2. EXTRAIRE LE NOM DU COMPOSANT pour le CodeBlock (hypothèse simple)
    const componentName = title.split(' ')[0] || 'Component';


    return (
        <>
            <Heading variant={1}>{title}</Heading>
            <Text>{description}</Text>
            <PropsTable props={propsData} />
            <VariationPreview 
                params={params} 
                renderPreview={renderPreview} 
                selectedParams={selectedParams} 
                setSelectedParams={setSelectedParams}
                componentName={componentName} // Optionnel, pour un meilleur CodeBlock
            />
            <UsageExample code={usageExample} />
        </>
    );
};

export default ShowcaseComponent;