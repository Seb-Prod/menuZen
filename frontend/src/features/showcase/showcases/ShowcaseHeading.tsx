import Heading from "@/components/ui/Heading";
import { ShowcaseComponent } from "../components";
import { headingProps, headingUsageExample } from "./data/Heading";

const ShowcaseHeading = () => {
  return (
    <ShowcaseComponent
      title="Heading"
      description="Titres avec différentes variantes et couleurs"
      propsData={headingProps}
      usageExample={headingUsageExample}
      params={{
        color: ["primary", "secondary", "dark", "light", "neutral", "warning", "success"] as const,
        variant: [1, 2, 3, 4, 5, 6] as const,
        align:["left", "right", "center", "justify"] as const,
      }}
      renderPreview={(combo) => (
        <Heading variant={combo.variant} color={combo.color} align={combo.align}>
          Exemple de titre
        </Heading>
      )}
    />
  );
};

export default ShowcaseHeading;