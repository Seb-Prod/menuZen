/**
 * @file Page 404 - Non trouvée
 * @module pages/NotFound
 * @version 1.0.0
 * @since 2025-11-02
 * @author Seb-Prod
 */

import type { JSX } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import { ROUTES } from "@/routes";
import styles from "./NotFound.module.css";
import { Page } from "@/components/layout";

const NotFound = (): JSX.Element => {
    return (
        <Page>
            <div className={styles.container}>
                <h1>404</h1>
                <p>Oups ! Cette page n'existe pas.</p>
                <Link to={ROUTES.HOME}>
                    <Button variant="primary">
                        Retour à l'accueil
                    </Button>
                </Link>
            </div>
        </Page>
    );
};

export default NotFound;