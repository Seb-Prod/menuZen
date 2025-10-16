export type Params = Record<string, readonly unknown[]>;

export type Combination<T extends Params> = {
    [K in keyof T]: T[K] extends readonly (infer U)[] ? U : never;
};

