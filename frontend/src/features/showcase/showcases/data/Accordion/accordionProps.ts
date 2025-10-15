import { ACCORDION_VARIANTS,  ACCORDION_DEFAULTS} from "@/components/ui/Accordion/Accordion.types";
import { formatType } from "@/features/showcase/utils";

export default [
  {
    name: "variant",
    type: formatType(ACCORDION_VARIANTS),
    default: ACCORDION_DEFAULTS.variant,
    description: "Documentation a faire",
    values: ACCORDION_VARIANTS },

] as const;