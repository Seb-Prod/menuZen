import { SPINNER_ALIGN, SPINNER_SIZE, SPINNER_VARIANTS } from '@/components/ui/Spinner/Spinner.types';
import { formatType } from '@/features/documentation/utils';

const spinnerProps = [
  {
    name: "size",
    type: formatType(SPINNER_SIZE),
    description: "Taille du spinner",
    required: false,
    default: '"medium"',
  },
  {
    name: "variant",
    type: formatType(SPINNER_VARIANTS),
    description: "Style visuel du spinner",
    required: false,
    default: '"primary"',
  },
  {
    name: "align",
    type: formatType(SPINNER_ALIGN),
    description: "Position du spinner",
    required: false,
    default: '"center"',
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Contenu affiché sous le spinner",
    required: false,
    default: "Chargement en cours",
  },
];

export default spinnerProps;