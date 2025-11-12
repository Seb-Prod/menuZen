/**
 * @file Page 404 - Non trouvée
 * @module pages/NotFound
 * @version 1.0.0
 * @since 2025-11-02
 * @author Seb-Prod
 */

import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { ROUTES } from "@/routes";
import styles from "./NotFound.module.css";
import { Page } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

const NotFound = (): JSX.Element => {
    return (
        <Page>
            <div className={styles.container}>
                <Heading variant="error" justify="center">404</Heading>
                <Text variant="error" weight="bold" justify="center">Oups ! Cette page n'existe pas.</Text>
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