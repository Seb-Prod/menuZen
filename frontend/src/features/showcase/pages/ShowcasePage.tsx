import { useState, lazy, Suspense, type JSX } from "react";
import styles from "./ShowcasePage.module.css";
import Spinner from "@/components/ui/Spinner";
import { Heading, ThemeToggle } from "@/components/ui";
import { Page, SideBar } from "@/components/layout";

// Importation dynamique de tous les fichiers Showcase*.tsx dans le dossier showcases
const showcaseModules = import.meta.glob("../showcases/Showcase*.tsx");

// Extraction des noms des composants à partir des chemins d'importation
const showcaseNames = Object.keys(showcaseModules).map((path) => {
    const match = path.match(/Showcase(.*)\.tsx$/);
    return match ? match[1] : path;
});


const ShowcasePage = (): JSX.Element => {
    // Par défaut, le premier showcase trouvé est sélectionné
    const [selected, setSelected] = useState(showcaseNames[0]);

    // Chargement dynamique du composant sélectionné
    const SelectedComponent = lazy(() =>
        (showcaseModules[`../showcases/Showcase${selected}.tsx`] as () => Promise<{
            default: React.ComponentType<Record<string, never>>;
        }>)()
    );

    return (
        <Page>
            <div className={styles.container}>
                <SideBar>
                        <ThemeToggle />
                        <Heading variant={3}>Composant ui</Heading>
                        <ul className={styles.list}>
                            {showcaseNames.map((name) => (
                                <li key={name}>
                                    <button
                                        onClick={() => setSelected(name)}
                                        className={`${styles.listItem} ${selected === name ? styles.active : ""
                                            }`}
                                    >
                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                </SideBar>

                {/* Zone principale */}
                <main className={styles.main}>
                    <Suspense fallback={<Spinner />}>
                        <SelectedComponent />
                    </Suspense>
                </main>
            </div>
        </Page>

    );
};

export default ShowcasePage;