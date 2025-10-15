import { useState, lazy, Suspense, type JSX, useCallback } from "react";
import styles from "./ShowcasePage.module.css";
import Spinner from "@/components/ui/Spinner";
import { ThemeToggle } from "@/components/ui";
import { Page, SideBar } from "@/components/layout";
import { Accordion, AccordionItem, AccordionSection } from "@/components/ui/Accordion";

// Importation dynamique de tous les fichiers Showcase*.tsx dans le dossier showcases
const showcaseModules = import.meta.glob("../showcases/Showcase*.tsx");

// Extraction des noms des composants à partir des chemins d'importation
const showcaseNames = Object.keys(showcaseModules).map((path) => {
    const match = path.match(/Showcase(.*)\.tsx$/);
    return match ? match[1] : path;
});

// 1. Composant pour afficher le texte d'explication
const SectionDescription = ({ title, content }: { title: string, content: string }): JSX.Element => (
    <div style={{ padding: '20px' }}>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Sélectionnez un élément dans l'accordéon pour voir sa démonstration.</p>
    </div>
);

// Constantes pour les états spéciaux
const SECTION_UI = '__SECTION_UI__';
const SECTION_PROJECTS = '__SECTION_PROJECTS__';


const ShowcasePage = (): JSX.Element => {
    // 2. Initialisation à null pour qu'aucun élément ne soit sélectionné par défaut
    const [selected, setSelected] = useState<string | null>(null);

    // Fonction de rappel pour gérer le clic sur une section
    const handleSectionClick = useCallback((sectionKey: string) => {
        // Si on clique sur une section, on la sélectionne (et désélectionne les items)
        setSelected(sectionKey);
    }, []);

    // Chargement dynamique du composant sélectionné uniquement si c'est un showcase
    const SelectedComponent = selected && selected !== SECTION_UI && selected !== SECTION_PROJECTS
        ? lazy(() =>
            (showcaseModules[`../showcases/Showcase${selected}.tsx`] as () => Promise<{
                default: React.ComponentType<Record<string, never>>;
            }>)()
        ) : null;

    // Détermination du contenu principal
    let mainContent: JSX.Element;

    if (selected === SECTION_UI) {
        mainContent = (
            <SectionDescription 
                title="Composants d'Interface Utilisateur (UI)"
                content="Cette section présente les composants réutilisables de base (boutons, cartes, modales, etc.) développés pour ce projet. Chaque élément peut être cliqué pour voir sa démo et son code source."
            />
        );
    } else if (selected === SECTION_PROJECTS) {
        mainContent = (
            <SectionDescription 
                title="Projets"
                content="Cette section contient des exemples d'intégration de plusieurs composants UI pour former des fonctionnalités ou des pages complètes, illustrant leur utilisation dans un contexte réel."
            />
        );
    } else if (SelectedComponent) {
        mainContent = (
            <Suspense fallback={<Spinner />}>
                <SelectedComponent />
            </Suspense>
        );
    } else {
        // Message par défaut si rien n'est sélectionné
        mainContent = (
            <div style={{ padding: '20px' }}>
                <h2>Bienvenue dans la vitrine des composants !</h2>
                <p>Veuillez sélectionner un élément dans la barre latérale pour afficher sa démonstration ou cliquez sur une section pour obtenir plus d'informations.</p>
            </div>
        );
    }


    return (
        <Page>
            <div className={styles.container}>
                <SideBar>
                    <ThemeToggle />
                    <Accordion variant="primary">
                        {/* 3. Ajout de la fonction onClick pour sélectionner la section */}
                        <AccordionSection 
                            label="Composant UI" 
                            defaultOpen={false}
                            onClick={() => handleSectionClick(SECTION_UI)}
                            isActive={selected === SECTION_UI}
                        >
                            {showcaseNames.map((name) => (
                                <AccordionItem
                                    title={name}
                                    key={name}
                                    onClick={() => setSelected(name)} // Le clic sur un item sélectionne l'item
                                    isActive={selected === name}
                                />
                            ))}
                        </AccordionSection>

                        <AccordionSection 
                            label="Projets"
                            onClick={() => handleSectionClick(SECTION_PROJECTS)}
                            isActive={selected === SECTION_PROJECTS}
                        >
                            <AccordionItem title="Projet 1" />
                        </AccordionSection>
                        {/* J'ai supprimé l'AccordionItem isolé qui ne servait à rien ici */}
                    </Accordion>
                </SideBar>

                {/* Zone principale avec le contenu conditionnel */}
                <main className={styles.main}>
                    {mainContent}
                </main>
            </div>
        </Page>
    );
};

export default ShowcasePage;