import { useState, lazy, Suspense, useCallback, type JSX } from "react";
import styles from "./ShowcasePage.module.css";
import Spinner from "@/components/ui/Spinner";
import { Page } from "@/components/layout";
import ShowcaseSidebar from "./ShowCaseSidebar";
import SectionDocumentation from "./SectionDocumentation";
import { UI_CONTENT, PROJECTS_CONTENT, THEME_CONTENT, SECTION_KEYS } from "./ShowcaseContent";
import { useDevice } from "@/context/Device";

// Importation dynamique
const showcaseModules = import.meta.glob("./showcases/Showcase*.tsx");
const showcaseNames = Object.keys(showcaseModules).map((path) => path.match(/Showcase(.*)\.tsx$/)?.[1] || path);

const ShowcasePage = (): JSX.Element => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSectionClick = useCallback((key: string) => setSelected(key), []);

  // Chargement dynamique du composant
  const SelectedComponent =
    selected &&
      !Object.values(SECTION_KEYS).includes(selected)
      ? lazy(() =>
        (showcaseModules[`./showcases/Showcase${selected}.tsx`] as () => Promise<{
          default: React.ComponentType;
        }>)()
      )
      : null;

  const renderContent = (): JSX.Element => {
    switch (selected) {
      case SECTION_KEYS.THEME:
        return <SectionDocumentation title="Design System & Thème" content={THEME_CONTENT} />;
      case SECTION_KEYS.UI:
        return <SectionDocumentation title="Composants UI" content={UI_CONTENT} />;
      case SECTION_KEYS.PROJECTS:
        return <SectionDocumentation title="Composants Layout & Projets" content={PROJECTS_CONTENT} />;
      default:
        if (SelectedComponent)
          return (
            <Suspense fallback={<Spinner />}>
              <SelectedComponent />
            </Suspense>
          );
        return (
          <SectionDocumentation
            title="Documentation Technique"
            content={
              <>
                <p>Bienvenue dans la documentation technique centralisée.</p>
                <p>Sélectionnez une section dans la barre latérale pour explorer les composants et le design system.</p>
              </>
            }
          />
        );
    }
  };

  const { isMobile, isPWA, isStandalone, deviceType, isMobilePWA } = useDevice();


  return (
    <Page>
      <div>
      <p>Type d'appareil: {deviceType}</p>
      <p>Mode mobile: {isMobile ? 'Oui' : 'Non'}</p>
      <p>Mode PWA: {isPWA ? 'Oui ✅' : 'Non ❌'}</p>
      <p>Mode mobile PWA: {isMobilePWA ? 'Oui ✅' : 'Non ❌'}</p>
      <p>Mode Standalone: {isStandalone ? 'Installée' : 'Navigateur'}</p>
      
      {isPWA && isMobile && (
        <div className="pwa-banner">
          🎉 Application installée sur mobile !
        </div>
      )}
    </div>
      <div className={styles.container}>
        <ShowcaseSidebar
          showcaseNames={showcaseNames}
          selected={selected}
          onSelect={handleSectionClick}
        />
        <main className={styles.main}>{renderContent()}</main>
      </div>
    </Page>
  );
};

export default ShowcasePage;