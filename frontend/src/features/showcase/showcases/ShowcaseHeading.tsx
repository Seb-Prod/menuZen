import Heading from "@/components/ui/Heading";
import headingProps from "./data/headingProps";
import headingUsageExample from "./data/headingUsageExample";
import { ShowcaseComponent } from "../components";

const ShowcaseHeading = () => {
  return (
    <ShowcaseComponent
      title="Heading"
      description="Titres avec différentes variantes et couleurs"
      propsData={headingProps}
      usageExample={headingUsageExample}
      params={{
        variant: [1, 2, 3, 4, 5, 6] as const,
        color: ["primary", "secondary", "dark", "light", "neutral", "warning", "success"] as const,
      }}
      renderPreview={(combo) => (
        <Heading variant={combo.variant} color={combo.color}>
          Exemple de titre
        </Heading>
      )}
    />
  );
};

export default ShowcaseHeading;