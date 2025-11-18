/**
 * @file Page Auth
 * @module features/auth/page/AuthPage
 */

import { Form } from "@/components/layout";
import { type JSX } from "react";
// 💡 Import de FormErrors (si nécessaire, sinon déduit localement)
import type { FormErrors } from "@/components/layout/Form/Form.types"; 

/**
 * Page **AuthPage** — Page de connection et de création de compte.
 * * Permet de se connecter à son compte et d'en créer un.
 * * @component
 * @version 1.0.0
 * @since 2025-11-14
 * @author Seb-Prod
 * * * @returns {JSX.Element} Page Auth React.
 * */
const AuthPage = (): JSX.Element => { // 💡 La page ne reçoit généralement pas 'values' en props, sauf si elle est wrappée.
  
  // 💡 Typage explicite du paramètre values
  const handleSubmission = (values: Record<string, string | boolean>) => {
    console.log("Données soumises:", values);
    alert("Formulaire soumis avec succès. Voir la console pour les données.");
  };

  // 💡 Correction : Typage explicite de l'objet errors pour résoudre l'erreur ts(2339)
  const validateGlobal = (values: Record<string, string | boolean>): FormErrors => {
    const errors: FormErrors = {}; // Typage de l'objet pour résoudre l'erreur

    // 1. Validation Manuelle pour la Checkbox Requise
    // Accès sécurisé : cast en boolean
    const conditionsAcceptees = values.conditionsAcceptees as boolean | undefined;
    if (!conditionsAcceptees) {
      errors.conditionsAcceptees = "Vous devez accepter les conditions générales.";
    }

    // 2. Validation Manuelle pour le Radio Group 'frequence' requis
    // Accès sécurisé : cast en string (le radio button retourne toujours une string)
    const frequenceContact = values.frequenceContact as string | undefined;
    if (!frequenceContact || frequenceContact === "") {
      errors.frequenceContact = "Veuillez choisir une fréquence de contact.";
    }

    return errors;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Page d'Authentification (Test Form)</h1>
      <Form
        fields={[
          // ... (Liste des champs inchangée) ...
          {
            name: "username",
            label: "Nom d'utilisateur (Requis)",
            type: "text",
            required: true,
            minLength: 3,
            placeholder: "MonPseudo"
          },
          {
            name: "name",
            label: "Nom complet",
            type: "text",
            required: true,
            minLength: 2,
            placeholder: "John Doe",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            required: true,
            placeholder: "john@example.com"
          },
          {
            name: "phone",
            label: "Téléphone",
            type: "tel",
            placeholder: "+33 6 12 34 56 78"
          },

          {
            name: "frequenceContact", 
            label: "Fréquence de contact souhaitée",
            type: "radio",
            options: [
              { value: "journalier", label: "Journalière" },
              { value: "hebdomadaire", label: "Hebdomadaire" },
              { value: "mensuel", label: "Mensuelle" },
            ],
          },
          
          {
            name: "newsletterType",
            label: "Type de Newsletter",
            type: "radio",
            defaultValue: "produits",
            options: [
              { value: "produits", label: "Nouveaux produits" },
              { value: "promotion", label: "Promotions spéciales" },
              { value: "aucune", label: "Je ne souhaite pas de newsletter" },
            ],
          },

          {
            name: "conditionsAcceptees",
            label: "J'accepte les conditions générales d'utilisation",
            type: "checkbox",
            defaultChecked: false,
            required:true
          },
        ]}
        onSubmit={handleSubmission}
        validate={validateGlobal}
        submitLabel="Envoyer"
      />
    </div>
  );
};
export default AuthPage;