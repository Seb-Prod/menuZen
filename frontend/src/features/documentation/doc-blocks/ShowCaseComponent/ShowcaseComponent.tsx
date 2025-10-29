import { useState, type JSX } from "react";
import { ComponentPlayground, DocProps, UsageExample} from "..";
import type { PropInfo } from "../../types/types";
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
    params?: T;
    /** Fonction de rendu qui reçoit une combinaison de paramètres et retourne le composant à prévisualiser */
    renderPreview: (combo: Combination<T>) => JSX.Element;
    /** Fonction pour générer le code correspondant au rendu. Si non fournie, une version par défaut sera utilisée. */
    generateCode: (combo: Combination<T>) => string;
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
 *   generateCode={(combo) => 
 *     `<Button variant="${combo.variant}" size="${combo.size}">\n  Click me\n</Button>`
 *   }
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
    generateCode,
}: ShowcaseComponentProps<T>): JSX.Element => {
    const initialParams = params 
        ? (Object.fromEntries(
            Object.keys(params).map((key) => [key, params[key][0]])
          ) as Combination<T>)
        : ({} as Combination<T>);

    const [selectedParams, setSelectedParams] = 
        useState<Combination<T>>(initialParams);

    return (
        <>
            <Heading variant={1}>{title}</Heading>
            <Text>{description}</Text>
            <hr /> 
            <DocProps props={propsData} />
            <ComponentPlayground 
                params={params} 
                renderPreview={renderPreview} 
                selectedParams={selectedParams} 
                setSelectedParams={setSelectedParams}
                generateCode={generateCode}
            />
            <UsageExample code={usageExample} />
        </>
    );
};

export default ShowcaseComponent;