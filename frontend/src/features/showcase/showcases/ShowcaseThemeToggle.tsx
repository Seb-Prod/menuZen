import ThemeToggle from "@/components/ui/ThemeToggle";
import { ShowcaseComponent } from "../components";
import type { JSX } from "react";
import { themetoggleProps, themetoggleUsageExample } from "./data/ThemeToggle";
import { generateCodeString } from "../utils";

const renderThemeTogglePreview = (): JSX.Element => (
  <ThemeToggle
  >
  </ThemeToggle>
);

const generateThemeToggleCode = (): string => {
  const propExpressions = [``];

  return generateCodeString("ThemeToggle", propExpressions, false);
};

const ShowcaseThemeToggle = (): JSX.Element => {
  return (
    <ShowcaseComponent
      title="ThemeToggle"
      description="Documentation à faire"
      propsData={themetoggleProps}
      usageExample={themetoggleUsageExample}
      renderPreview={renderThemeTogglePreview}
      generateCode={generateThemeToggleCode}
    />
  );
};

export default ShowcaseThemeToggle;