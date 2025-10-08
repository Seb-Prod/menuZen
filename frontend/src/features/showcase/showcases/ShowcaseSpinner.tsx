import type { JSX } from "react";
import { ShowcaseComponent } from "../components";
import spinnerProps from "./data/Spinner/spinnerProps"; // 💡 Doit être créé
import spinnerUsageExample from "./data/Spinner/spinnerUsageExample"; // 💡 Doit être créé
import Spinner from "@/components/ui/Spinner";

// 💡 Correction : Renommer la fonction
const ShowcaseSpinner=():JSX.Element => {
  return (
    <ShowcaseComponent
      title="Spinner"
      description="Indicateur de chargement rotatif avec différentes tailles et variantes de couleur pour signifier une attente."
      
      // 💡 Correction : Utiliser les données du Spinner
      propsData={spinnerProps}
      usageExample={spinnerUsageExample}
      
      params={{
        variant: ["primary", "secondary", "neutral", "warning"] as const,
        size: ["small", "medium", "large"] as const,
      }}
      renderPreview={(combo) => (
        <Spinner variant={combo.variant} size={combo.size} /> 
      )}
    />
  );
}

export default ShowcaseSpinner;