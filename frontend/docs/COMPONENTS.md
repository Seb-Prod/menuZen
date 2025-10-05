# 📦 Composants UI - Liste de suivi

> Documentation des composants UI du projet
> 
> **Emplacement** : `frontend/docs/COMPOSANTS.md`  
> **Dernière mise à jour** : 05/10/2025

---

## 🎯 Légende
- ✅ Terminé
- 🚧 En cours
- ⏳ À faire
- ❌ Abandonné / Non nécessaire

---

## 🔥 Priorité Haute (Essentiels)

### Composants de base
- [x] **Spinner** - Indicateur de chargement
  - Fichier : `src/components/ui/Spinner/`
  - Status : ✅ Terminé
- [ ] **Button** - Bouton avec variants (primary, secondary, warning, disabled)
  - Fichier : `src/components/ui/Button/`
  - 🚧 En cours
- [ ] **Input** - Champ de texte avec gestion d'erreurs
  - Fichier : `src/components/ui/Input/`
  - Status : ⏳ À faire
- [ ] **Card** - Container de contenu
  - Fichier : `src/components/ui/Card/`
  - Status : ⏳ À faire

### Feedback utilisateur
- [ ] **Alert** - Messages de notification (success, error, warning, info)
  - Fichier : `src/components/ui/Alert/`
  - Status : ⏳ À faire
- [ ] **Modal** - Boîte de dialogue modale
  - Fichier : `src/components/ui/Modal/`
  - Status : ⏳ À faire

---

## 📋 Priorité Moyenne (Formulaires)

### Composants de formulaire
- [ ] **Select** - Liste déroulante
- [ ] **Checkbox** - Case à cocher
- [ ] **Radio** - Bouton radio
- [ ] **Textarea** - Zone de texte multiligne
- [ ] **Switch** - Interrupteur on/off

### Feedback supplémentaire
- [ ] **Badge** - Badges de statut/compteur
- [ ] **Progress** - Barre de progression
- [ ] **Toast** - Notifications temporaires

---

## 🧭 Priorité Moyenne (Navigation)

- [ ] **Tabs** - Onglets de navigation
- [ ] **Breadcrumb** - Fil d'Ariane
- [ ] **Pagination** - Navigation entre pages

---

## 🎨 Priorité Basse (Avancés)

- [ ] **Accordion** - Contenu pliable
- [ ] **Tooltip** - Info-bulle au survol
- [ ] **Popover** - Popup contextuel
- [ ] **Skeleton** - Placeholder de chargement
- [ ] **Avatar** - Image de profil
- [ ] **Dropdown Menu** - Menu déroulant
- [ ] **Table** - Tableau de données
- [ ] **DatePicker** - Sélecteur de date

---

## 📊 Statistiques

| Métrique | Valeur |
|----------|--------|
| **Total composants** | 25 |
| **Terminés** | 1  |
| **En cours** | 1  |
| **Restants** | 24 |

---

## 📝 Conventions de développement

### Structure d'un composant

```
src/components/ui/NomComposant/
├── NomComposant.tsx           # Composant React
├── NomComposant.module.css    # Styles CSS Modules
└── index.ts                   # Export
```

### Standards à respecter

#### TypeScript
- ✅ Utiliser TypeScript (`.tsx`)
- ✅ Typer toutes les props
- ✅ Exporter les types des props

#### Styling
- ✅ CSS Modules pour le styling (`.module.css`)
- ✅ Utiliser les variables CSS de `styles/colors.css` et `styles/typography.css`
- ✅ Suivre le [STYLEGUIDE.md](./STYLEGUIDE.md)

#### Documentation
- ✅ Ajouter JSDoc complète
- ✅ Inclure des exemples d'utilisation
- ✅ Documenter toutes les props

#### Props
- ✅ Utiliser `children?: ReactNode` quand approprié
- ✅ Fournir des valeurs par défaut
- ✅ Préfixer les event handlers avec `on` (ex: `onClick`, `onChange`)

### Template de composant

```typescript
import type { ReactNode, JSX } from "react";
import styles from "./NomComposant.module.css";

/**
 * Props du composant NomComposant
 */
type NomComposantProps = {
  /** Description de la prop */
  children?: ReactNode;
  /** Variante du composant */
  variant?: "primary" | "secondary";
};

/**
 * Composant NomComposant
 * 
 * @component
 * @example
 * ```tsx
 * <NomComposant variant="primary">
 *   Contenu
 * </NomComposant>
 * ```
 */
const NomComposant = ({ 
  children, 
  variant = "primary" 
}: NomComposantProps): JSX.Element => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

export default NomComposant;
```

---

## 🎯 Ordre de développement suggéré

1. **Button** - Le plus utilisé dans toute l'application
2. **Input** - Essentiel pour tous les formulaires
3. **Card** - Structure de base pour organiser le contenu
4. **Alert** - Feedback utilisateur important
5. **Modal** - Pour les interactions critiques
6. **Puis selon les besoins** de l'application

---

## 🔗 Liens utiles

- [STYLEGUIDE.md](./STYLEGUIDE.md) - Guide de style et design system
- [Architecture frontend](../README.md) - Structure du projet
- [Variables CSS](../src/styles/) - Couleurs et typographie

---

## 📅 Historique des modifications

| Date | Modification | Auteur |
|------|--------------|--------|
| 05/10/2025 | Création du fichier | Seb-Prod |
| 05/10/2025 | Ajout de Spinner | Seb-Prod |