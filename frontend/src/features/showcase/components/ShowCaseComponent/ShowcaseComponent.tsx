import type { JSX } from "react";
import { PropsTable, UsageExample, ShowcaseTable, ShowcaseSection } from "../../components";
import type { PropInfo } from "../../types/propsInfo";

type Params = Record<string, readonly unknown[]>;
type Combination<T extends Params> = {
    [K in keyof T]: T[K] extends readonly (infer U)[] ? U : never;
};

type ShowcaseComponentProps<T extends Params> = {
    title: string;
    description: string;
    propsData: readonly PropInfo[];
    usageExample: string;
    params: T;
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
    const paramKeys = Object.keys(params);

    if (paramKeys.length === 0) {
        return (
            <ShowcaseSection title={title} description={description}>
                {propsData && <PropsTable props={propsData} />}
                {usageExample && <UsageExample code={usageExample} />}
                <p>Aucun paramètre à afficher.</p>
            </ShowcaseSection>
        );
    }

    // Génère des combinaisons simples : un set par paramètre
    const combinations: { combo: Record<string, unknown>; group: string }[] = [];

    for (const key of paramKeys) {
        const baseCombo: Record<string, unknown> = {};
        // Valeur par défaut pour tous les params
        for (const k of paramKeys) {
            baseCombo[k] = params[k]?.[0];
        }
        // Variation uniquement du paramètre courant
        for (const value of params[key]) {
            combinations.push({
                group: key,
                combo: { ...baseCombo, [key]: value },
            });
        }
    }

    // Formate les props pour affichage du code
    const formatValue = (value: unknown): string => {
        if (typeof value === "string") return `"${value}"`;
        if (typeof value === "boolean" || typeof value === "number") return `{${value}}`;
        return `{${JSON.stringify(value)}}`;
    };

    const showcaseData = combinations.map(({ combo, group }) => ({
        group, // ✅ ici c’est bien une string
        label: Object.entries(combo)
            .map(([k, v]) => `${k}: ${v}`)
            .join(" / "),
        code: Object.entries(combo)
            .map(([k, v]) => `${k}=${formatValue(v)}`)
            .join(" "),
        preview: renderPreview(combo as Combination<T>),
    }));

    return (
        <ShowcaseSection title={title} description={description}>
            {propsData && <PropsTable props={propsData} />}
            {usageExample && <UsageExample code={usageExample} />}
            <ShowcaseTable data={showcaseData} />
        </ShowcaseSection>
    );
};

export default ShowcaseComponent;