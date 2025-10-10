import Text from "@/components/ui/Text";
import { ShowcaseComponent } from "../components";
// Assurez-vous que ces imports sont corrects
import { textProps, textUsageExample } from "./data/Text"; 

// Constantes pour générer TOUTES les combinaisons

const ALL_COLORS = ["primary", "secondary", "dark", "light", "neutral", "warning", "success"] as const;
const ALL_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;
const ALL_WEIGHTS = ["light", "regular", "medium", "bold"] as const;

const ShowcaseText = () => {
  return (
    <ShowcaseComponent
      title="Text"
      description="Texte avec toutes les options de balise, couleur, taille et poids."
      propsData={textProps}
      usageExample={textUsageExample}
      params={{
        
        color: ALL_COLORS,
        size: ALL_SIZES,
        weight: ALL_WEIGHTS,
      }}
      renderPreview={(combo) => (
        <Text 
          color={combo.color} 
          size={combo.size} 
          weight={combo.weight}
        >
          Example
        </Text>
        
      )}
    />
  );
};

export default ShowcaseText;