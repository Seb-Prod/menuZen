/**
 * @file Page de documentation et showcase pour le composant Select.
 * @module pages/showcase/ShowcaseSelect
 */

import Select from "@/components/ui/Select";
import type { JSX } from "react";
import type { Combination } from "../../utils/showcaseHelpers";
import { SELECT_SHOWCASE_CONSTANTS } from '@/components/ui/Select/Select.types';
import { selectProps, selectUsageExample } from "../../data/Select";
import { generateCodeString } from "../../utils";
import DocPageContainer from "../../doc-blocks/DocPageContainer/DocPageContainer"; // Assurez-vous d'importer le DocPageContainer

type SelectShowcaseCombo = Combination<typeof SELECT_SHOWCASE_CONSTANTS>;

/**
 * Définit un jeu d'options minimal pour le rendu de la preview.
 * @constant
 */
const PREVIEW_OPTIONS = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

/**
 * Génère le rendu visuel du Select avec les paramètres sélectionnés.
 *
 * @param {SelectShowcaseCombo} combo - Combinaison des props du Select.
 * @returns {JSX.Element} Instance du Select avec les props appliquées.
 */
const renderPreview = (combo: SelectShowcaseCombo): JSX.Element => (
  <Select
    variant={combo.variant}
    size={combo.size}
    align={combo.align}
    options={PREVIEW_OPTIONS}
    disabled={combo.disabled}
    fullWidth={combo.fullWidth}
  />
);

/**
 * Génère le code TSX correspondant à la combinaison de props sélectionnée.
 * Omet les props avec valeurs par défaut pour un code plus concis.
 *
 * @param {SelectShowcaseCombo} combo - Combinaison des props du Select.
 * @returns {string} Code TSX formaté représentant le Select configuré.
 */
const generateCode = (combo: SelectShowcaseCombo): string => {
  const propExpressions = [
    // Omet les valeurs par défaut
    combo.variant !== "primary" && `variant="${combo.variant}"`,
    combo.size !== "medium" && `size="${combo.size}"`,
    combo.align !== "left" && `align="${combo.align}"`,
    combo.disabled !== false && `disabled`,
    combo.fullWidth !== false && `fullWidth`,
    // La prop 'options' est requise, elle doit toujours être présente dans le code
    `options={[ { value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' } ]}`,
  ];

  return generateCodeString("Select", propExpressions);
};

/**
 * Composant ShowcaseSelect - Page de documentation du composant Select.
 *
 * Page de showcase complète présentant le composant Select avec :
 * - Documentation des props
 * - Exemples d'utilisation
 * - Playground interactif pour tester toutes les variations
 *
 * @component
 * @version 1.0.0
 * @since 2025-10-21
 * @author Seb-Prod
 *
 * @returns {JSX.Element} La page de documentation complète pour Select.
 *
 * @see {@link Select}
 * @see {@link DocPageContainer}
 * @see {@link SELECT_SHOWCASE_CONSTANTS}
 */
const ShowcaseSelect = (): JSX.Element => {
  return (
    <DocPageContainer
      title="Select"
      description="Une liste déroulante personnalisée et accessible qui supporte la navigation au clavier, la gestion des variantes de style, de la taille, et de l'alignement du menu."
      usageExample={selectUsageExample}
      params={SELECT_SHOWCASE_CONSTANTS}
      renderPreview={renderPreview}
      generateCode={generateCode}
      props={selectProps}
    />
  );
};

export default ShowcaseSelect;