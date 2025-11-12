/**
 * @file Exemples d'utilisation du composant
 * @module features/documentation/data/Select/usage
 * @description
 * Code examples et documentation d'usage
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

export const usageExample = `import Select from "@/components/ui/Select";
import { useState } from "react";

const LANGUAGES = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
  { value: "es", label: "Español", disabled: true },
];

export default function SelectShowcase() {
  const [lang, setLang] = useState(LANGUAGES[0].value);
  const [theme, setTheme] = useState("dark");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* 1. Exemple Basique et Contrôlé (Primary, Medium, Align Left) */}
      <div className="example-group">
        <h3>Sélecteur de Langue (Primary)</h3>
        <Select 
          options={LANGUAGES}
          value={lang}
          onChange={setLang}
          variant="primary"
          size="medium"
          placeholder="Choisir une langue"
          id="select-lang"
          name="language"
        />
        <p>Valeur sélectionnée : **{lang}**</p>
      </div>
      
      {/* 2. Exemple de Variantes et Taille (Secondary, Large) */}
      <div className="example-group">
        <h3>Sélecteur de Thème (Secondary, Large)</h3>
        <Select 
          options={[{ value: 'light', label: 'Clair' }, { value: 'dark', label: 'Sombre' }]}
          value={theme}
          onChange={setTheme}
          variant="secondary" // Changement de couleur
          size="large" // Changement de taille
          placeholder="Thème d'affichage"
        />
      </div>

      {/* 3. Exemple Désactivé (Disabled) */}
      <div className="example-group">
        <h3>Sélecteur Désactivé (Warning)</h3>
        <Select 
          options={LANGUAGES}
          value={LANGUAGES[1].value} // Valeur prédéfinie
          variant="warning"
          size="small"
          disabled // Le sélecteur est inactif
        />
      </div>

      {/* 4. Exemple d'Alignement (Align Right) */}
      <div className="example-group" style={{ textAlign: 'right' }}>
        <h3>Menu Alignée à Droite</h3>
        <Select 
          options={LANGUAGES}
          value={lang}
          onChange={setLang}
          align="right" // Le menu déroulant s'ouvre à droite
          placeholder="Alignement"
        />
      </div>
    </div>
  );
}`;