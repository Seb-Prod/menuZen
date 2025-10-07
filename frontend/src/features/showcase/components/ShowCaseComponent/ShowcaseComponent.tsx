import type { JSX } from "react";
import { PropsTable, UsageExample, ShowcaseTable, ShowcaseSection } from "../../components";
import type { PropInfo } from "../../types/propsInfo";
type ParamMap = Record<string, readonly unknown[]>;
type Params = Record<string, readonly unknown[]>;
type Combination<T extends Params> = {
    [K in keyof T]: T[K] extends readonly (infer U)[] ? U : never;
};

type ShowcaseComponentProps<T extends Params> = {
    title: string;
    description: string;
    propsData: PropInfo[];
    usageExample: string;
    params: T; // Tous les paramètres possibles
    renderPreview: (combo: Combination<T>) => JSX.Element;
};

const ShowcaseComponent = <T extends Params>({
    title,
    description,
    propsData,
    usageExample,
    params,
    renderPreview,
}: ShowcaseComponentProps<T>): JSX.Element => {

    // Génère toutes les combinaisons de paramètres
    const generateCombinations = (obj: ParamMap): Record<string, unknown>[] => {
        const keys = Object.keys(obj);
        if (keys.length === 0) return [{}];

        const [firstKey, ...restKeys] = keys;
        const restCombinations = generateCombinations(
            restKeys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})
        );

        return obj[firstKey].flatMap((value) =>
            restCombinations.map((combo) => ({ [firstKey]: value, ...combo }))
        );
    };

    // Formate une valeur pour l'affichage du code
    const formatValue = (value: unknown): string => {
        if (typeof value === "string") {
            return `"${value}"`;
        }
        if (typeof value === "boolean" || typeof value === "number") {
            return `{${value}}`;
        }
        return `{${JSON.stringify(value)}}`;
    };

    const combinations = generateCombinations(params as ParamMap) as Combination<T>[];

    const showcaseData = combinations.map((combo) => ({
        label: Object.values(combo).join(" / "),
        code: Object.entries(combo)
            .map(([k, v]) => `${k}=${formatValue(v)}`)
            .join(" "),
        preview: renderPreview(combo),
    }));

    return (
        <ShowcaseSection title={title} description={description}>
            {propsData && <PropsTable props={propsData} />}
            {usageExample && <UsageExample code={usageExample} />}
            <ShowcaseTable data={showcaseData} />
        </ShowcaseSection>
    );
}

export default ShowcaseComponent;