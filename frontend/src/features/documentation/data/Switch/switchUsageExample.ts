const switchUsageExample = `import Switch from "@/components/ui/Switch";
import { useState } from "react";

export default function MyComponent() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <div>
      {/* Exemple basique */}
      <Switch 
        id="basic" 
        label="Activer l'option" 
      />

      {/* Switch contrôlé avec état */}
      <Switch 
        id="controlled"
        label="Mode activé"
        checked={isEnabled}
        onChange={(checked) => setIsEnabled(checked)}
      />

      {/* Switch avec variante et taille */}
      <Switch 
        id="darkMode"
        label="Mode sombre"
        checked={darkMode}
        onChange={setDarkMode}
        variant="success"
        size="large"
      />

      {/* Switch avec couleur de label personnalisée */}
      <Switch 
        id="notifications"
        label="Recevoir les notifications"
        checked={notifications}
        onChange={setNotifications}
        variant="info"
        labelColor="info"
        align="left"
      />

      {/* Switch désactivé */}
      <Switch 
        id="disabled"
        label="Option désactivée"
        disabled={true}
      />
    </div>
  );
}`;

export default switchUsageExample;