/**
 * @file Page de documentation et showcase pour le composant Separator.
 * @module features/documentation/pages/showcase/ShowcaseSeparator
 * @description
 * Page interactive de documentation du composant Separator.
 * Affiche la description, les propriétés, les exemples d'utilisation
 * et un showcase interactif permettant de tester toutes les combinaisons
 * de props en temps réel.
 * 
 * @version 1.0.0
 * @since 2025-11-09
 * @author Seb-Prod
 * 
 * @see {@link Separator} pour l'implémentation du composant
 * @see {@link DocPageContainer} pour le conteneur de documentation
 */

import { separatorProps, separatorUsageExample } from "../../data/Separator";
import { SHOWCASE } from "@/components/ui/Separator/Separator.types";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer";
import { createShowcaseFromProps } from "../../utils/showcaseFactory";
import { Separator } from "@/components/ui";

const componentName = "Separator";

const separatorDescription = "Composant de séparateur visuel horizontal ou vertical. Permet de diviser visuellement des sections de contenu avec des options de personnalisation pour l'orientation, l'épaisseur, la couleur et l'espacement.";

const { renderPreview, generateCode } = createShowcaseFromProps(
  Separator,
  componentName,
  separatorProps,
  {
    // Pas de defaultChildren car Separator n'a pas de children
  }
);

const ShowcaseSeparator = () => {
  return (
    <DocPageContainer
      title={componentName}
      description={separatorDescription}
      props={separatorProps}
      usageExample={separatorUsageExample}
      params={SHOWCASE}
      renderPreview={renderPreview}
      generateCode={generateCode}
    />
  );
};

export default ShowcaseSeparator;