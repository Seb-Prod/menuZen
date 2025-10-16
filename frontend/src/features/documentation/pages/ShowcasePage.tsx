import { useState, lazy, Suspense, type JSX, useCallback } from "react";
import styles from "./ShowcasePage.module.css";
import Spinner from "@/components/ui/Spinner";
import { ThemeToggle } from "@/components/ui";
import { Page, SideBar } from "@/components/layout";
import { Accordion, AccordionButton, AccordionSection } from "@/components/ui/Accordion";

// Importation dynamique de tous les fichiers Showcase*.tsx dans le dossier showcases
const showcaseModules = import.meta.glob("../showcases/Showcase*.tsx");

// Extraction des noms des composants à partir des chemins d'importation
const showcaseNames = Object.keys(showcaseModules).map((path) => {
    const match = path.match(/Showcase(.*)\.tsx$/);
    return match ? match[1] : path;
});

// NOUVELLES FONCTIONS DE DESCRIPTION POUR LA DOCUMENTATION TECHNIQUE
// 1. Documentation Générique (pour les sections spéciales)
const SectionDocumentation = ({ title, content }: { title: string, content: JSX.Element }): JSX.Element => (
    <div style={{ padding: '20px' }}>
        <h1 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>{title}</h1>
        {content}
    </div>
);

// Composants de contenu pour les nouvelles sections
// ---
// Contenu pour la documentation des Composants UI
const UI_CONTENT = (
    <>
        <p>Cette section est dédiée à la **documentation technique** des composants atomiques et molécules de l'interface utilisateur. Ces éléments sont conçus pour être réutilisables, accessibles et indépendants de la logique métier.</p>
        <p>Chaque démonstration affiche l'utilisation du composant, ses **propriétés (props)** disponibles, et des exemples de code pour une intégration rapide. Cliquez sur un élément dans la liste ci-dessous pour lancer sa démo interactive.</p>
        
        <h3>Structure d'un Composant UI :</h3>
        <ul>
            <li>**Fichiers :** `Component.tsx`, `Component.module.css`, `Component.types.ts`.</li>
            <li>**Convention :** Utilisation de **CSS Modules** pour un style scellé et de **TypeScript** pour une API de composant bien définie.</li>
        </ul>
    </>
);

// Contenu pour la documentation des Composants Layout/Projets
const PROJECTS_CONTENT = (
    <>
        <p>Cette section documente les **composants d'organisation (layout)** et les **modèles de pages (templates)**. Ils illustrent la manière dont les composants UI sont assemblés pour former des structures complexes ou des fonctionnalités orientées utilisateur.</p>
        <p>Les "Projets" servent d'exemples d'intégration et de scénarios d'utilisation réels.</p>
        
        <h3>Exemples de Layouts :</h3>
        <ul>
            <li>**`Page` :** Conteneur de niveau supérieur pour toutes les vues.</li>
            <li>**`SideBar` :** Panneau de navigation latéral.</li>
            <li>... et toute structure répétitive qui organise le contenu.</li>
        </ul>
    </>
);

// Contenu pour la documentation du Thème/Design System
const THEME_CONTENT = (
    <>
        <p>Cette section documente les choix fondamentaux du **Design System** : **Couleurs, Typographie et Espacement**.</p>
        
        <h2>Palette de Couleurs</h2>
        <p>Utilisez les variables CSS (par exemple, `--color-primary-500`) définies dans les fichiers de thème globaux.</p>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--color-primary-500)', color: 'white', display: 'flex', alignItems: 'flex-end', padding: '5px', fontSize: '12px' }}>Primary</div>
            <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--color-secondary-500)', color: 'white', display: 'flex', alignItems: 'flex-end', padding: '5px', fontSize: '12px' }}>Secondary</div>
            <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--color-warning-500)', color: 'black', display: 'flex', alignItems: 'flex-end', padding: '5px', fontSize: '12px' }}>Warning</div>
            <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--color-neutral-300)', color: 'black', display: 'flex', alignItems: 'flex-end', padding: '5px', fontSize: '12px' }}>Neutral</div>
        </div>
        
        <h2>Typographie</h2>
        <p>Police de caractère par défaut, tailles et poids utilisés pour les titres et le corps de texte.</p>
        <p style={{ fontSize: '32px', fontWeight: 'bold' }}>Titre H1 (32px)</p>
        <p style={{ fontSize: '18px', fontWeight: 'normal' }}>Corps de Texte (18px)</p>
        
        <h2>Espacement et Échelles</h2>
        <p>Basé sur une échelle de 8px pour les marges et paddings (e.g., `8px`, `16px`, `24px`, etc.).</p>
    </>
);
// ---

// Constantes pour les états spéciaux
const SECTION_THEME = '__SECTION_THEME__'; // Nouvelle section
const SECTION_UI = '__SECTION_UI__';
const SECTION_PROJECTS = '__SECTION_PROJECTS__';


const ShowcasePage = (): JSX.Element => {
    // 2. Initialisation à null pour qu'aucun élément ne soit sélectionné par défaut
    const [selected, setSelected] = useState<string | null>(null);

    // Fonction de rappel pour gérer le clic sur une section
    const handleSectionClick = useCallback((sectionKey: string) => {
        // Le clic sur une section sélectionne la section et la met en actif
        setSelected(sectionKey);
    }, []);

    // Chargement dynamique du composant sélectionné uniquement si c'est un showcase
    const SelectedComponent = selected && selected !== SECTION_UI && selected !== SECTION_PROJECTS && selected !== SECTION_THEME
        ? lazy(() =>
            (showcaseModules[`../showcases/Showcase${selected}.tsx`] as () => Promise<{
                default: React.ComponentType<Record<string, never>>;
            }>)()
        ) : null;

    // Détermination du contenu principal
    let mainContent: JSX.Element;

    if (selected === SECTION_THEME) {
        mainContent = (
            <SectionDocumentation 
                title="Design System et Thème Technique"
                content={THEME_CONTENT}
            />
        );
    } else if (selected === SECTION_UI) {
        mainContent = (
            <SectionDocumentation 
                title="Composants d'Interface Utilisateur (UI)"
                content={UI_CONTENT}
            />
        );
    } else if (selected === SECTION_PROJECTS) {
        mainContent = (
            <SectionDocumentation 
                title="Composants Layout et Structures Projet"
                content={PROJECTS_CONTENT}
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
                <h1 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                    Documentation Technique de la Vitrine
                </h1>
                <p>
                    Bienvenue dans la **documentation technique centralisée** de l'application. Cette page fournit des informations détaillées sur l'architecture des composants, le Design System (thème, couleurs, typographie) et les pratiques de développement.
                </p>
                <p>
                    Veuillez **sélectionner une section** dans la barre latérale pour explorer la documentation ou lancer la démonstration d'un composant spécifique.
                </p>
            </div>
        );
    }


    return (
        <Page>
            <div className={styles.container}>
                <SideBar>
                    <ThemeToggle />
                    <Accordion variant="primary">
                        <AccordionSection 
                            title="Design System (Thème, Couleurs)" 
                            defaultOpen={false}
                            onClick={() => handleSectionClick(SECTION_THEME)}
                            isActive={selected === SECTION_THEME}
                        >
                            <AccordionButton title="Couleurs & Typo" onClick={() => handleSectionClick(SECTION_THEME)} isActive={selected === SECTION_THEME} />
                        </AccordionSection>

                        {/* SECTION : Composants UI */}
                        <AccordionSection 
                            title="Composants UI" 
                            defaultOpen={true}
                            onClick={() => handleSectionClick(SECTION_UI)}
                            isActive={selected === SECTION_UI}
                        >
                            {showcaseNames.map((name) => (
                                <AccordionButton
                                    title={name}
                                    key={name}
                                    onClick={() => setSelected(name)}
                                    isActive={selected === name}
                                />
                            ))}
                        </AccordionSection>

                        {/* SECTION : Layouts / Projets */}
                        <AccordionSection 
                            title="Composants Layout"
                            onClick={() => handleSectionClick(SECTION_PROJECTS)}
                            isActive={selected === SECTION_PROJECTS}
                        >
                            <AccordionButton title="Structure de Page" onClick={() => handleSectionClick(SECTION_PROJECTS)} isActive={selected === SECTION_PROJECTS} />
                            <AccordionButton title="Projet 1 (Exemple)" />
                        </AccordionSection>
                        
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