import Button from "@/components/ui/Button";
import buttonProps from "./data/buttonProps";
import buttonUsageExample from "./data/buttonUsageExample";
import { ShowcaseComponent } from "../components";
import type { JSX } from "react";

const ShowcaseButton = (): JSX.Element => {
  return (
    <ShowcaseComponent
      title="Button"
      description="Boutons interactifs avec différentes tailles et variantes"
      propsData={buttonProps}
      usageExample={buttonUsageExample}
      params={{
        variant: ["primary", "secondary", "neutral", "warning"] as const,
        size: ["small", "medium", "large"] as const,
        disabled:[false, true] as const
      }}
      renderPreview={(combo) => (
        <div>
          <Button variant={combo.variant} size={combo.size} disabled={combo.disabled}>
            example
          </Button>
        </div>

      )}
    />
  );
}
export default ShowcaseButton;
