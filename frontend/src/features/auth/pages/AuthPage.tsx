/**
 * @file Page Auth
 * @module features/auth/page/AuthPage
 */

import { Form } from "@/components/layout";
import { type JSX } from "react";

/**
 * Page **AuthPage** — Page de connection et de création de compte.
 * 
 * Permet de se coonecter à son compte et d'en créer un.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-11-14
 * @author Seb-Prod
 * 
 * 
 * @returns {JSX.Element} Page Auth React.
 * 
 */
const AuthPage = (): JSX.Element => {
    return (
        <Form
            fields={[
                { name: "name", label: "Nom", type: "text", required: true },
                { name: "name", label: "Nom", type: "text", required: true },
                { name: "name", label: "Nom", type: "text", required: true },
                { name: "name", label: "Nom", type: "text", required: true },
            ]}
            onSubmit={(data) => console.log("Formulaire envoyé :", data)}
        />
    )
}

export default AuthPage;
