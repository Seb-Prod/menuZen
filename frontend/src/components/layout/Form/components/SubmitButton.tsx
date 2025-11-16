/**
 * @file SubmitButton.tsx
 * @module components/layout/Form/components/SubmitButton
 *
 * @description
 * Composant réutilisable représentant un bouton de soumission avec état de chargement.
 * Il désactive automatiquement le bouton pendant la soumission et affiche un texte
 * adapté selon l’état.
 *
 * @version 1.0.0
 * @since 2025-11-16
 * author Seb-Prod
 */

import { Button } from "@/components/ui";

interface SubmitButtonProps {
  isSubmitting: boolean;
  label?: string;
}

/**
 * Composant bouton de soumission doté d’un état visuel de chargement.
 *
 * @function SubmitButton
 * @param {SubmitButtonProps} props - Propriétés du composant.
 * @returns {JSX.Element} Un bouton prêt à l'emploi pour les formulaires.
 */
export const SubmitButton = ({ isSubmitting, label = "Envoyer" }: SubmitButtonProps) => (
  <Button
    type="submit"
    disabled={isSubmitting}
  >
    {isSubmitting ? "Envoie en cours..." : label}
  </Button>
);