/**
 * @file FieldWrapper.tsx
 * @module components/layout/Form/components/FieldWrapper
 *
 * @description
 * Composant utilitaire permettant d'encapsuler un champ de formulaire
 * avec son message d'erreur éventuel. Il assure une structure cohérente
 * pour tous les champs (input, select, textarea, etc.).
 *
 * @version 1.0.0
 * @since 2025-11-16
 * author Seb-Prod
 */

import type { ReactNode } from "react";
import { Text } from "@/components/ui";
import styles from "../Form.module.css";

interface FieldWrapperProps {
  name: string;
  error?: string;
  children: ReactNode;
}

/**
 * Composant wrapper pour un champ de formulaire et son message d'erreur.
 *
 * @function FieldWrapper
 * @param {FieldWrapperProps} props - Propriétés du wrapper.
 * @returns {JSX.Element} Élément contenant le champ et son éventuelle erreur.
 */
export const FieldWrapper = ({ name, error, children }: FieldWrapperProps) => (
  <div key={name} className={styles.field}>
    {children}
    {error && (
      <Text variant="error">{error}</Text>
    )}
  </div>
);