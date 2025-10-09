import { useState, lazy, Suspense, useEffect, type JSX } from "react";
import styles from "./ShowcasePage.module.css";
import Spinner from "@/components/ui/Spinner";

// Importation dynamique de tous les fichiers Showcase*.tsx dans le dossier showcases
const showcaseModules = import.meta.glob("../showcases/Showcase*.tsx");

// Extraction des noms des composants à partir des chemins d'importation
const showcaseNames = Object.keys(showcaseModules).map((path) => {
    const match = path.match(/Showcase(.*)\.tsx$/);
    return match ? match[1] : path;
});

type ThemeMode = 'auto' | 'light' | 'dark';

const ShowcasePage = (): JSX.Element => {
    // Par défaut, le premier showcase trouvé est sélectionné
    const [selected, setSelected] = useState(showcaseNames[0]);

    // Gestion du thème : 'auto', 'light', ou 'dark'
    const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
        const saved = localStorage.getItem('themeMode');
        return (saved as ThemeMode) || 'auto';
    });

    // Écouter les changements de préférence système - conservé mais la fonction handleChange est vide, car le mode 'auto' gère cela via CSS.
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            // Cette écoute est moins nécessaire avec la nouvelle approche 'auto' qui s'appuie sur la CSS (sans attribut data-theme)
            // mais l'event listener est conservé au cas où une logique basée sur l'état React serait ajoutée plus tard.
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Appliquer le thème
    useEffect(() => {
        localStorage.setItem('themeMode', themeMode);

        if (themeMode === 'auto') {
            // En mode 'auto', on retire l'attribut, laissant le CSS déterminer le thème.
            document.documentElement.removeAttribute('data-theme');
        } else {
            // En modes 'light' ou 'dark', on force le thème via l'attribut.
            document.documentElement.setAttribute('data-theme', themeMode);
        }
    }, [themeMode]);

    // Gestion du changement de thème pour les boutons et la checkbox
    const handleThemeChange = (newMode: ThemeMode) => {
        setThemeMode(newMode);
    };
    
    // Basculer entre 'auto' et le mode précédemment sélectionné (ou 'light' par défaut si 'auto' était sélectionné)
    const toggleAutoMode = () => {
        // Si on coche 'auto', on le sélectionne
        if (themeMode !== 'auto') {
            setThemeMode('auto');
        } else {
            // Si on décoche 'auto', on passe en mode 'light' (ou on pourrait passer au dernier mode non-auto stocké si nécessaire)
            setThemeMode('light'); 
        }
    };
    

    // Chargement dynamique du composant sélectionné
    const SelectedComponent = lazy(() =>
        (showcaseModules[`../showcases/Showcase${selected}.tsx`] as () => Promise<{
            default: React.ComponentType<Record<string, never>>;
        }>)()
    );

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2 className={styles.sidebarTitle}>Composants</h2>
                    
                    {/* 🎨 Sélecteur de thème avec Checkbox et Boutons */}
                    <div className={styles.themeSelector}>
                        <div className={styles.autoModeContainer}>
                            <input
                                type="checkbox"
                                id="auto-theme"
                                checked={themeMode === 'auto'}
                                onChange={toggleAutoMode}
                                className={styles.autoCheckbox}
                                aria-label="Activer le mode thème automatique (système)"
                            />
                            <label htmlFor="auto-theme" className={styles.autoLabel}>
                                🔄 Auto
                            </label>
                        </div>
                        
                        <div className={styles.themeButtons}>
                            <button
                                onClick={() => handleThemeChange('light')}
                                disabled={themeMode === 'light'}
                                className={`${styles.themeButton} ${themeMode === 'light' ? styles.activeTheme : ''}`}
                                title="Activer le mode Clair"
                                aria-label="Mode Clair"
                            >
                                ☀️ Clair
                            </button>
                            <button
                                onClick={() => handleThemeChange('dark')}
                                disabled={themeMode === 'dark'}
                                className={`${styles.themeButton} ${themeMode === 'dark' ? styles.activeTheme : ''}`}
                                title="Activer le mode Sombre"
                                aria-label="Mode Sombre"
                            >
                                🌙 Sombre
                            </button>
                        </div>
                    </div>
                </div>
                
                <ul className={styles.list}>
                    {showcaseNames.map((name) => (
                        <li key={name}>
                            <button
                                onClick={() => setSelected(name)}
                                className={`${styles.listItem} ${
                                    selected === name ? styles.active : ""
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
                <Suspense fallback={<Spinner />}>
                    <SelectedComponent />
                </Suspense>
            </main>
        </div>
    );
};

export default ShowcasePage;