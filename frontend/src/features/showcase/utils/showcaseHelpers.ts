import type { JSX } from "react";

export type Params = Record<string, readonly unknown[]>;

export type Combination<T extends Params> = {
    [K in keyof T]: T[K] extends readonly (infer U)[] ? U : never;
};

export type ShowcaseRow = {
    group: string;
    label: string;
    code: string;
    preview: JSX.Element;
};

// ✅ Génération des données du showcase
export function generateShowcaseData<T extends Params>(
    params: T,
    paramKeys: string[],
    renderPreview: (combo: Combination<T>) => JSX.Element
): ShowcaseRow[] {
    const combinations = generateCombinations(params, paramKeys);
    return combinations.map(({ combo, group }) => ({
        group,
        label: formatLabel(combo),
        code: formatCode(combo),
        preview: renderPreview(combo as Combination<T>),
    }));
}

// ✅ Génération des combinaisons
function generateCombinations<T extends Params>(
    params: T,
    paramKeys: string[]
): Array<{ combo: Record<string, unknown>; group: string }> {
    const combinations: Array<{ combo: Record<string, unknown>; group: string }> = [];
    const defaultValues = createDefaultCombo(params, paramKeys);

    for (const key of paramKeys) {
        for (const value of params[key]) {
            combinations.push({
                group: key,
                combo: { ...defaultValues, [key]: value },
            });
        }
    }

    return combinations;
}

// ✅ Création de la combinaison par défaut
function createDefaultCombo<T extends Params>(
    params: T,
    paramKeys: string[]
): Record<string, unknown> {
    const defaultCombo: Record<string, unknown> = {};
    for (const key of paramKeys) {
        defaultCombo[key] = params[key]?.[0];
    }
    return defaultCombo;
}

// ✅ Formatage du label lisible
function formatLabel(combo: Record<string, unknown>): string {
    return Object.entries(combo)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" / ");
}

// ✅ Formatage du code React
function formatCode(combo: Record<string, unknown>): string {
    return Object.entries(combo)
        .map(([key, value]) => `${key}=${formatValue(value)}`)
        .join(" ");
}

// ✅ Formatage des valeurs pour le code
function formatValue(value: unknown): string {
    if (typeof value === "string") return `"${value}"`;
    if (typeof value === "boolean" || typeof value === "number") return `{${value}}`;
    return `{${JSON.stringify(value)}}`;
}