import { TABLE_DEFAULTS, TABLE_VARIANTS, TABLE_ALIGN } from "@/components/ui/Table/Table.types";
import { formatType } from "@/features/documentation/utils";

export default [
    {
        name: "variant",
        type: formatType(TABLE_VARIANTS),
        default: TABLE_DEFAULTS.variant,
        description: "Style visuel du tableau",
        values: TABLE_VARIANTS
    },
    {
        name: "align",
        type: formatType(TABLE_ALIGN),
        default: TABLE_DEFAULTS.align,
        description: "Alignement horizontal du tableau",
        values: TABLE_ALIGN
    },
    {
        name: "fullWidth",
        type: "boolean",
        default: TABLE_DEFAULTS.fullWidth,
        description: "Le tableau prend toute la largeur disponible",
        values: [true, false]
    },
    {
        name: "headers",
        type: "string[ ]",
        default: undefined,
        description: "Tableau des libellés d'en-têtes de colonnes",
        values: undefined,
        required: true,
    },
    {
        name: "data",
        type: "ReactNode[ ][ ]",
        default: undefined,
        description: "Tableau bidimensionnel contenant les données des cellules (lignes × colonnes)",
        values: undefined,
        required: true,
    },
    {
        name: "className",
        type: "string",
        default: TABLE_DEFAULTS.className,
        description: "Classes CSS additionnelles pour personnalisation avancée",
        required: false,
      },
]