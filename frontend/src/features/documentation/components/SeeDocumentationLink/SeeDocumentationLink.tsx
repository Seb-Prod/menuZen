import type { JSX } from "react";

type SeeDocumentationLinkProps = {
  /** Clé du composant vers lequel naviguer */
  target: string;
  /** Fonction de navigation optionnelle */
  onNavigate?: (key: string) => void;
  /** Texte affiché sur le lien */
  label?: string;
  /** Classes supplémentaires pour le style */
  className?: string;
};

/**
 * Lien réutilisable pour naviguer vers la documentation d'un autre composant
 */
const SeeDocumentationLink = ({
  target,
  onNavigate,
  label,
  className = "",
}: SeeDocumentationLinkProps): JSX.Element => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <button
        onClick={() => onNavigate?.(target)}
        className={`text-blue-500 underline ${className}`}
      >
        {label ?? `Voir la documentation du composant ${target}`}
      </button>
    </div>
  );
};

export default SeeDocumentationLink;