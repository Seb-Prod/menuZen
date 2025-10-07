import { useState, lazy, Suspense, type JSX } from "react";
import styles from "./ShowcasePage.module.css";
import Spinner from "@/components/ui/Spinner";

// 🪄 On importe automatiquement tous les fichiers Showcase*.tsx du dossier showcases
const showcaseModules = import.meta.glob("../showcases/Showcase*.tsx");

// 🔍 On extrait la liste des noms de composants (ex: "Spinner", "Button", etc.)
const showcaseNames = Object.keys(showcaseModules).map((path) => {
    const match = path.match(/Showcase(.*)\.tsx$/);
    return match ? match[1] : path;
});

const  ShowcasePage=():JSX.Element =>{
    // Par défaut : premier showcase trouvé
    const [selected, setSelected] = useState(showcaseNames[0]);

    // ⚡ Chargement dynamique du composant sélectionné
    const SelectedComponent = lazy(() =>
        (showcaseModules[`../showcases/Showcase${selected}.tsx`] as () => Promise<{
            default: React.ComponentType<Record<string, never>>;
        }>)()
    );

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <h2 className={styles.sidebarTitle}>Composants</h2>
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
            </aside>

            {/* Zone principale */}
            <main className={styles.main}>
                <Suspense fallback={<Spinner/>}>
                    <SelectedComponent />
                </Suspense>
            </main>
        </div>
    );
}

export default ShowcasePage;