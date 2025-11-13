import type { JSX, ReactNode } from "react";
import styles from "./Page.module.css";
import { Footer } from "../Footer";
import Navbar from "../Navbar";
import { useDevice } from "@/context/Device";

type PageProps = {
    children: ReactNode;
};

const Page = ({ children }: PageProps): JSX.Element => {
    const { isMobilePWA } = useDevice();

    return (
        // Utiliser une classe de base pour le flexbox
        <div className={styles.page}>

            {/* Navbar en haut : TOUJOURS visible sauf en PWA */}
            {!isMobilePWA && <Navbar />}

            {/* Le contenu principal */}
            <div className={styles.main} data-mobile={isMobilePWA}>
                {children}
            </div>

            {/* Footer en bas : Visible par défaut. Navbar en PWA */}
            {isMobilePWA ? <Navbar /> : <Footer email="seb"/>}
        </div>
    );
}

export default Page;