import { formatType } from "../../../utils";
import { CHEVRONICON_DEFAULTS, CHEVRONICON_TYPE, CHEVRONICON_SIZE, CHEVRONICON_ISOPEN, CHEVRONICON_COLOR } from '@/components/ui/ChevronIcon/ChevronIcon.types';

export default [
  {
    name: "type",
    type: formatType(CHEVRONICON_TYPE),
    default: CHEVRONICON_DEFAULTS.type,
    description: "Définit le type de l'icône Chevron.",
    values: CHEVRONICON_TYPE,
    required: false,
  },
  {
    name: "isOpen",
    type: formatType(CHEVRONICON_ISOPEN),
    default: CHEVRONICON_DEFAULTS.isOpen,
    description: "Définit si le Chevron est ouvert ou fermé.",
    values: CHEVRONICON_ISOPEN,
    required: false,
  },
  {
    name: "size",
    type: formatType(CHEVRONICON_SIZE),
    default: CHEVRONICON_DEFAULTS.size,
    description: "Définit la taille de l'icône Chevron.",
    values: CHEVRONICON_SIZE,
    required: false,
  },
  {
    name: "ariaLabelOpen",
    type: "string",
    default: CHEVRONICON_DEFAULTS.ariaLabelOpen,
    description: "Définit le texte alternatif (aria-label) à utiliser lorsque l'icône Chevron est ouverte.",
    required: false,
  },
  {
    name: "ariaLabelClose",
    type: "string",
    default: CHEVRONICON_DEFAULTS.ariaLabelClose,
    description: "Définit le texte alternatif (aria-label) à utiliser lorsque l'icône Chevron est fermée.",
    required: false,
  },
  {
    name: "colorStyle",
    type: formatType(CHEVRONICON_COLOR),
    default: CHEVRONICON_DEFAULTS.colorStyle,
    description: "Définit la couleur de l'icône Chevron.",
    values: CHEVRONICON_COLOR,
    required: false,
  },
] as const;
