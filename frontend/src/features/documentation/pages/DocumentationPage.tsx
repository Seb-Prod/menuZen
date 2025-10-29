/**
 * @file Page principale de la documentation
 * @module features/documentation/pages/DocumentationPage
 */

import { useState, lazy, Suspense, useCallback, type JSX } from "react";
import styles from "./ShowcasePage.module.css";
import Spinner from "@/components/ui/Spinner";
import { Page } from "@/components/layout";
import DocumentationSidebar from "../components/DocumentationSidebar/DocumentationSidebar";
import SectionDocumentation from "../components/SectionDocumentation/SectionDocumentation";
import type { SelectedKey } from "../types/types";
import { getDocumentationNames, loadDocument } from "./documentationLoader";
import { LAYOUT_CONTENT, SECTION_KEYS, THEME_CONTENT, UI_CONTENT } from "./DocumentationContent";

const showcaseNames = getDocumentationNames();

/**
 * Composant DocumentationPage - Page principale de la documentation technique.
 * 
 * Gère l'affichage de la documentation avec une sidebar de navigation et une zone de contenu principal.
 * Supporte le chargement dynamique (lazy loading) des documentations des composants pour optimiser les performances.
 * Affiche des sections de documentation pour le Design System, les composants UI et Layout.
 * 
 * Fonctionnalités :
 * - Navigation par sections (Theme, UI, Layout)
 * - Chargement dynamique des documentations individuels
 * - Gestion de l'état de sélection avec mise en évidence dans la sidebar
 * - Fallback avec spinner pendant le chargement des composants
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-29
 * @author Seb-Prod
 * 
 * @returns {JSX.Element} La page de documentation complète avec sidebar et contenu.
 * 
 * @see {@link DocumentationSidebar}
 * @see {@link SectionDocumentation}
 * @see {@link SECTION_KEYS}
 */
const DocumentationPage = (): JSX.Element => {
  const [selected, setSelected] = useState<SelectedKey>(null);

  /**
   * Gestionnaire de clic sur un élément de la sidebar.
   * Met à jour l'état de sélection pour afficher le contenu correspondant.
   * 
   * @param {string} key - Clé de l'élément sélectionné (section ou nom de composant).
   */
  const handleSectionClick = useCallback((key: string) => setSelected(key), []);

  /**
   * Rendu conditionnel du contenu principal en fonction de la sélection.
   * 
   * @returns {JSX.Element} Le composant à afficher (section ou documentation).
   */
  const renderContent = (): JSX.Element => {
    switch (selected) {
      case SECTION_KEYS.THEME:
        return <SectionDocumentation title="Design System" description={THEME_CONTENT} />;
      case SECTION_KEYS.UI:
        return <SectionDocumentation title="Composants UI" description={UI_CONTENT} />;
      case SECTION_KEYS.LAYOUT:
        return <SectionDocumentation title="Composants Layout" description={LAYOUT_CONTENT} />;
      default:
        // Si la sélection n'est pas une section, c'est une documentation composant
        if (selected && !(Object.values(SECTION_KEYS) as string[]).includes(selected)) {
          const documentationLoader = loadDocument(selected);
          
          if (documentationLoader) {
            const SelectedComponent = lazy(documentationLoader);
            return (
              <Suspense fallback={<Spinner />}>
                <SelectedComponent />
              </Suspense>
            );
          }
        }
        
        // Page d'accueil par défaut
        return (
          <SectionDocumentation
            title="Documentation Technique"
            description="Bienvenue dans la documentation technique. Sélectionnez une section dans la barre latérale"
          />
        );
    }
  };

  return (
    <Page>
      <div className={styles.page}>
        <DocumentationSidebar
          showcaseNames={showcaseNames}
          selected={selected}
          onSelect={handleSectionClick}
        />
        <main className={styles.main}>{renderContent()}</main>
      </div>
    </Page>
  );
};

export default DocumentationPage;