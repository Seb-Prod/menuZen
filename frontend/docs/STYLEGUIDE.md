# 🎨 Guide de Style (Styleguide)

> Design System et conventions visuelles du projet
>
> **Emplacement** : `frontend/docs/STYLEGUIDE.md`  
> **Dernière mise à jour** : [À mettre à jour]

---

## 📋 Table des matières

1. [Introduction](#introduction)
2. [Palette de couleurs](#palette-de-couleurs)
3. [Typographie](#typographie)
4. [Espacement](#espacement)
5. [Composants](#composants)
6. [Accessibilité](#accessibilité)

---

## 🎯 Introduction

Ce guide définit les standards visuels et d'interface du projet. Il assure la cohérence du design à travers toute l'application.

### Objectifs
- ✅ Cohérence visuelle dans toute l'application
- ✅ Faciliter le développement des composants
- ✅ Améliorer l'expérience utilisateur
- ✅ Garantir l'accessibilité

---

## 🎨 Palette de couleurs

### Couleurs de marque

| Nom | Variable CSS | Hex | RGB | Aperçu |
|-----|--------------|-----|-----|--------|
| **Primary** | `--primary-color` | `#009B4D` | `0, 155, 77` | ![#009B4D](https://placehold.co/100x30/009B4D/009B4D.png) |
| **Secondary** | `--secondary-color` | `#FFCC00` | `255, 204, 0` | ![#FFCC00](https://placehold.co/100x30/FFCC00/FFCC00.png) |
| **Tertiary** | `--tertiary-color` | `#FAF5E9` | `250, 245, 233` | ![#FAF5E9](https://placehold.co/100x30/FAF5E9/FAF5E9.png) |

**Utilisation :**
- **Primary** : Actions principales, liens importants, éléments d'interaction clés
- **Secondary** : Actions secondaires, highlights, éléments d'accentuation
- **Tertiary** : Arrière-plans légers, zones de contenu doux

**Avec transparence :**
```css
/* Utiliser les versions RGB pour la transparence */
.overlay {
  background-color: rgba(var(--primary-rgb), 0.8);
}

.shadow {
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.2);
}
```

---

### Couleurs de fond

| Nom | Variable CSS | Hex | Aperçu | Utilisation |
|-----|--------------|-----|--------|-------------|
| **Primary Background** | `--primary-background` | `#F9F5EA` | ![#F9F5EA](https://placehold.co/100x30/F9F5EA/F9F5EA.png) | Fond principal de l'application |
| **Secondary Background** | `--secondary-background` | `#F8ECD1` | ![#F8ECD1](https://placehold.co/100x30/F8ECD1/F8ECD1.png) | Cartes, sections, zones de contenu |

**Mode sombre :**

| Variable CSS | Hex (Dark Mode) | Aperçu |
|--------------|-----------------|--------|
| `--primary-background` | `#1F1E1D` | ![#1F1E1D](https://placehold.co/100x30/1F1E1D/1F1E1D.png) |
| `--secondary-background` | `#2A2928` | ![#2A2928](https://placehold.co/100x30/2A2928/2A2928.png) |

---

### Couleurs de boutons

#### Boutons Primary

| État | Variable CSS | Hex | Aperçu | Quand utiliser |
|------|--------------|-----|--------|----------------|
| **Normal** | `--primary-button` | `#449955` | ![#449955](https://placehold.co/100x30/449955/449955.png) | État par défaut |
| **Hover** | `--primary-button-hover` | `#307037` | ![#307037](https://placehold.co/100x30/307037/307037.png) | Au survol de la souris |

```css
.btn-primary {
  background-color: var(--primary-button);
  color: var(--white);
}

.btn-primary:hover {
  background-color: var(--primary-button-hover);
}
```

#### Boutons Secondary

| État | Variable CSS | Hex | Aperçu | Quand utiliser |
|------|--------------|-----|--------|----------------|
| **Normal** | `--secondary-button` | `#F7CE46` | ![#F7CE46](https://placehold.co/100x30/F7CE46/F7CE46.png) | État par défaut |
| **Hover** | `--secondary-button-hover` | `#FBE99A` | ![#FBE99A](https://placehold.co/100x30/FBE99A/FBE99A.png) | Au survol de la souris |

```css
.btn-secondary {
  background-color: var(--secondary-button);
  color: var(--dark-text);
}

.btn-secondary:hover {
  background-color: var(--secondary-button-hover);
}
```

#### Boutons Warning

| État | Variable CSS | Hex | Aperçu | Quand utiliser |
|------|--------------|-----|--------|----------------|
| **Normal** | `--warning-button` | `#D54537` | ![#D54537](https://placehold.co/100x30/D54537/D54537.png) | Actions destructives |
| **Hover** | `--warning-button-hover` | `#DE7D78` | ![#DE7D78](https://placehold.co/100x30/DE7D78/DE7D78.png) | Au survol |

```css
.btn-warning {
  background-color: var(--warning-button);
  color: var(--white);
}

.btn-warning:hover {
  background-color: var(--warning-button-hover);
}
```

#### Boutons Disabled

| État | Variable CSS | Hex (Light) | Hex (Dark) | Aperçu Light | Aperçu Dark |
|------|--------------|-------------|------------|--------------|-------------|
| **Disabled** | `--disabled-button` | `#E0E0E0` | `#3A3A3A` | ![#E0E0E0](https://placehold.co/100x30/E0E0E0/E0E0E0.png) | ![#3A3A3A](https://placehold.co/100x30/3A3A3A/3A3A3A.png) |

```css
.btn:disabled {
  background-color: var(--disabled-button);
  color: var(--disabled-text);
  cursor: not-allowed;
  opacity: 0.6;
}
```

---

### Couleurs de texte

| Type | Variable CSS | Hex | Aperçu | Utilisation |
|------|--------------|-----|--------|-------------|
| **Primary Text** | `--primary-text` | `#123308` | ![#123308](https://placehold.co/100x30/123308/123308.png) | Texte principal du corps |
| **Secondary Text** | `--secondary-text` | `#F7CE46` | ![#F7CE46](https://placehold.co/100x30/F7CE46/F7CE46.png) | Texte secondaire, légendes |
| **Dark Text** | `--dark-text` | `#212721` | ![#212721](https://placehold.co/100x30/212721/212721.png) | Titres, texte à forte emphase |
| **Light Text** | `--light-text` | `#F8ECD1` | ![#F8ECD1](https://placehold.co/100x30/F8ECD1/F8ECD1.png) | Texte sur fond sombre |
| **Disabled Text** | `--disabled-text` | `#A3A3A3` | ![#A3A3A3](https://placehold.co/100x30/A3A3A3/A3A3A3.png) | Texte d'éléments désactivés |

**Mode sombre :**

| Variable CSS | Hex (Dark Mode) | Aperçu |
|--------------|-----------------|--------|
| `--primary-text` | `#F8ECD1` | ![#F8ECD1](https://placehold.co/100x30/F8ECD1/F8ECD1.png) |
| `--dark-text` | `#F9F5EA` | ![#F9F5EA](https://placehold.co/100x30/F9F5EA/F9F5EA.png) |
| `--light-text` | `#212721` | ![#212721](https://placehold.co/100x30/212721/212721.png) |

---

### Couleurs neutres

| Nom | Variable CSS | Hex | Aperçu | Utilisation |
|-----|--------------|-----|--------|-------------|
| **Black** | `--black` | `#000000` | ![#000000](https://placehold.co/100x30/000000/000000.png) | Texte très sombre, bordures |
| **Grey** | `--grey` | `#1F1E1D` | ![#1F1E1D](https://placehold.co/100x30/1F1E1D/1F1E1D.png) | Bordures, séparateurs |
| **White** | `--white` | `#FFFFFF` | ![#FFFFFF](https://placehold.co/100x30/FFFFFF/FFFFFF.png) | Fond blanc, texte sur fond sombre |

---

### Couleurs sémantiques

| État | Variable CSS | Hex | Aperçu | Utilisation |
|------|--------------|-----|--------|-------------|
| **Success** | `--success-color` | `#009B4D` | ![#009B4D](https://placehold.co/100x30/009B4D/009B4D.png) | Messages de succès, confirmations |
| **Warning** | `--warning-color` | `#B92F26` | ![#B92F26](https://placehold.co/100x30/B92F26/B92F26.png) | Alertes, avertissements |
| **Error** | `--error-color` | `#B92F26` | ![#B92F26](https://placehold.co/100x30/B92F26/B92F26.png) | Erreurs, actions destructives |
| **Neutral** | `--neutral-color` | `#A3A3A3` | ![#A3A3A3](https://placehold.co/100x30/A3A3A3/A3A3A3.png) | Informations neutres |

**Exemples d'utilisation :**
```css
.alert-success {
  background-color: rgba(var(--primary-rgb), 0.1);
  border-left: 4px solid var(--success-color);
  color: var(--primary-text);
}

.alert-error {
  background-color: rgba(185, 47, 38, 0.1);
  border-left: 4px solid var(--error-color);
  color: var(--dark-text);
}
```

---

## ✍️ Typographie

### Police principale

**Roboto** - Google Fonts

- **Famille** : `var(--font-sans)`
- **Import** : Déjà inclus dans `_typography.css`
- **Poids disponibles** : 300, 400, 500, 600, 700, 800, 900

```css
/* Utilisation */
body {
  font-family: var(--font-sans);
}
```

---

### Hiérarchie des titres

| Niveau | Variable CSS | Taille | Poids | Line Height | Usage |
|--------|--------------|--------|-------|-------------|-------|
| **H1** | `--heading-1` | 36px (2.25rem) | Bold (700) | 1.25 | Titre principal de page |
| **H2** | `--heading-2` | 30px (1.875rem) | Bold (700) | 1.25 | Titres de section majeure |
| **H3** | `--heading-3` | 24px (1.5rem) | Semibold (600) | 1.375 | Sous-titres de section |
| **H4** | `--heading-4` | 20px (1.25rem) | Semibold (600) | 1.375 | Titres de sous-section |
| **H5** | `--heading-5` | 18px (1.125rem) | Medium (500) | 1.5 | Titres mineurs |
| **H6** | `--heading-6` | 16px (1rem) | Medium (500) | 1.5 | Titres de carte/widget |

**Utilisation :**
```css
h1 {
  font: var(--heading-1);
  color: var(--dark-text);
}

/* Ou pour un élément personnalisé */
.hero-title {
  font: var(--heading-1);
}
```

---

### Échelle de tailles

| Variable CSS | Valeur | Pixels | Usage |
|--------------|--------|--------|-------|
| `--font-size-xs` | 0.75rem | 12px | Très petit texte, timestamps |
| `--font-size-sm` | 0.875rem | 14px | Texte secondaire, légendes |
| `--font-size-base` | 1rem | 16px | **Texte par défaut** |
| `--font-size-lg` | 1.125rem | 18px | Texte d'introduction |
| `--font-size-xl` | 1.25rem | 20px | Lead paragraphe |
| `--font-size-2xl` | 1.5rem | 24px | Petits titres |
| `--font-size-3xl` | 1.875rem | 30px | Titres moyens |
| `--font-size-4xl` | 2.25rem | 36px | Grands titres |
| `--font-size-5xl` | 3rem | 48px | Très grands titres |
| `--font-size-6xl` | 3.75rem | 60px | Hero sections |
| `--font-size-7xl` | 4.5rem | 72px | Display massif |
| `--font-size-8xl` | 6rem | 96px | Extra large |
| `--font-size-9xl` | 8rem | 128px | Ultra large |

---

### Poids de police (Font Weights)

| Variable CSS | Valeur | Nom | Usage |
|--------------|--------|-----|-------|
| `--font-weight-light` | 300 | Light | Texte très léger |
| `--font-weight-normal` | 400 | Regular | **Texte par défaut** |
| `--font-weight-medium` | 500 | Medium | Emphase légère, labels |
| `--font-weight-semibold` | 600 | Semibold | Sous-titres, emphase |
| `--font-weight-bold` | 700 | Bold | Titres principaux |
| `--font-weight-extrabold` | 800 | Extra Bold | Forte emphase |
| `--font-weight-black` | 900 | Black | Maximum d'emphase |

---

### Hauteurs de ligne (Line Heights)

| Variable CSS | Valeur | Usage |
|--------------|--------|-------|
| `--line-height-none` | 1 | Titres courts, badges |
| `--line-height-tight` | 1.25 | Titres |
| `--line-height-snug` | 1.375 | Sous-titres |
| `--line-height-normal` | 1.5 | **Texte par défaut** |
| `--line-height-relaxed` | 1.625 | Paragraphes longs |
| `--line-height-loose` | 2 | Texte très aéré |

---

### Styles de texte prédéfinis

#### Corps de texte

| Variable CSS | Taille | Poids | Line Height | Usage |
|--------------|--------|-------|-------------|-------|
| `--text-large` | 18px | 400 | 1.625 | Paragraphe d'introduction |
| `--text-body-large` | 16px | 400 | 1.625 | Texte principal |
| `--text-body-medium` | 14px | 400 | 1.5 | Texte secondaire |
| `--text-body-small` | 12px | 400 | 1.5 | Petits textes, notes |

```css
.intro {
  font: var(--text-large);
  color: var(--primary-text);
}

p {
  font: var(--text-body-large);
}
```

#### Styles spéciaux

| Variable CSS | Usage | Exemple |
|--------------|-------|---------|
| `--text-lead` | Paragraphe introductif important | Article lead |
| `--text-overline` | Petit texte au-dessus d'un titre | "NOUVEAU" |

#### Boutons

| Variable CSS | Taille | Poids | Usage |
|--------------|--------|-------|-------|
| `--button-text-large` | 16px | 500 | Gros boutons |
| `--button-text-medium` | 14px | 500 | **Boutons par défaut** |
| `--button-text-small` | 12px | 500 | Petits boutons |

```css
button {
  font: var(--button-text-medium);
}

.btn-large {
  font: var(--button-text-large);
}
```

---

### Espacement des lettres (Letter Spacing)

| Variable CSS | Valeur | Usage |
|--------------|--------|-------|
| `--letter-spacing-tighter` | -0.05em | Très serré |
| `--letter-spacing-tight` | -0.025em | Serré |
| `--letter-spacing-normal` | 0em | **Normal** |
| `--letter-spacing-wide` | 0.025em | Large |
| `--letter-spacing-wider` | 0.05em | Plus large |
| `--letter-spacing-widest` | 0.1em | Maximum |

---

### Styles de liens

| Variable CSS | Valeur | Usage |
|--------------|--------|-------|
| `--link-decoration` | `underline` | Soulignement par défaut |
| `--link-decoration-hover` | `none` | Pas de soulignement au survol |
| `--link-underline-offset` | `0.125em` | Distance du soulignement |

```css
a {
  color: var(--primary-color);
  text-decoration: var(--link-decoration);
  text-underline-offset: var(--link-underline-offset);
}

a:hover {
  color: var(--primary-button-hover);
  text-decoration: var(--link-decoration-hover);
}
```

---

## 📏 Espacement

### Système basé sur 8px

Utiliser un système d'espacement cohérent basé sur des multiples de **8px** (0.5rem).

| Nom | Valeur | Pixels | Variable suggérée | Usage |
|-----|--------|--------|-------------------|-------|
| **2xs** | 0.125rem | 2px | `--spacing-2xs` | Bordures fines |
| **xs** | 0.25rem | 4px | `--spacing-xs` | Espacement minimal |
| **sm** | 0.5rem | 8px | `--spacing-sm` | Petit espacement |
| **md** | 1rem | 16px | `--spacing-md` | **Espacement standard** |
| **lg** | 1.5rem | 24px | `--spacing-lg` | Espacement large |
| **xl** | 2rem | 32px | `--spacing-xl` | Espacement très large |
| **2xl** | 3rem | 48px | `--spacing-2xl` | Sections |
| **3xl** | 4rem | 64px | `--spacing-3xl` | Grandes sections |

### Recommandations d'usage

```css
/* Padding interne d'une carte */
.card {
  padding: 1.5rem; /* 24px - lg */
}

/* Marge entre sections */
.section {
  margin-bottom: 3rem; /* 48px - 2xl */
}

/* Espacement entre éléments d'un formulaire */
.form-group {
  margin-bottom: 1rem; /* 16px - md */
}

/* Gap dans une flexbox */
.button-group {
  display: flex;
  gap: 0.5rem; /* 8px - sm */
}
```

---

## 🧩 Composants

### Boutons

#### Structure de base

```css
.button {
  /* Typographie */
  font: var(--button-text-medium);
  
  /* Espacement */
  padding: 0.75rem 1.5rem;
  
  /* Apparence */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  /* Transition */
  transition: background-color 0.2s ease, transform 0.1s ease;
}
```

#### Variantes

**Primary Button**
```css
.btn-primary {
  background-color: var(--primary-button);
  color: var(--white);
}

.btn-primary:hover {
  background-color: var(--primary-button-hover);
}

.btn-primary:active {
  transform: scale(0.98);
}
```

**Secondary Button**
```css
.btn-secondary {
  background-color: var(--secondary-button);
  color: var(--dark-text);
}

.btn-secondary:hover {
  background-color: var(--secondary-button-hover);
}
```

**Warning Button**
```css
.btn-warning {
  background-color: var(--warning-button);
  color: var(--white);
}

.btn-warning:hover {
  background-color: var(--warning-button-hover);
}
```

**Disabled**
```css
.btn:disabled {
  background-color: var(--disabled-button);
  color: var(--disabled-text);
  cursor: not-allowed;
  opacity: 0.6;
}
```

#### Tailles

```css
.btn-small {
  font: var(--button-text-small);
  padding: 0.5rem 1rem;
}

.btn-medium {
  font: var(--button-text-medium);
  padding: 0.75rem 1.5rem;
}

.btn-large {
  font: var(--button-text-large);
  padding: 1rem 2rem;
}
```

---

### Cartes (Cards)

```css
.card {
  background-color: var(--white);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
```

---

### Inputs (Champs de texte)

```css
.input {
  /* Typographie */
  font: var(--text-body-large);
  
  /* Apparence */
  border: 1px solid var(--grey);
  border-radius: 8px;
  background-color: var(--white);
  
  /* Espacement */
  padding: 0.75rem 1rem;
  
  /* Transition */
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
}

.input:disabled {
  background-color: var(--disabled-button);
  color: var(--disabled-text);
  cursor: not-allowed;
}

.input.error {
  border-color: var(--error-color);
}
```

---

### Alertes

```css
.alert {
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border-left: 4px solid;
}

.alert-success {
  background-color: rgba(var(--primary-rgb), 0.1);
  border-left-color: var(--success-color);
  color: var(--primary-text);
}

.alert-error {
  background-color: rgba(185, 47, 38, 0.1);
  border-left-color: var(--error-color);
  color: var(--dark-text);
}

.alert-warning {
  background-color: rgba(213, 69, 55, 0.1);
  border-left-color: var(--warning-color);
  color: var(--dark-text);
}
```

---

## ♿ Accessibilité

### Contraste des couleurs

Tous les textes doivent respecter les **ratios WCAG 2.1** :

| Type de texte | Ratio minimum | Niveau |
|---------------|---------------|--------|
| Texte normal (< 18px) | **4.5:1** | AA |
| Texte large (≥ 18px ou ≥ 14px bold) | **3:1** | AA |
| Éléments d'interface | **3:1** | AA |

**Vérifier vos contrastes :**
- Outil : [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Plugin Figma : Stark

---

### Focus visible

**Toujours** fournir un indicateur de focus visible pour la navigation au clavier :

```css
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

❌ **Ne JAMAIS faire :**
```css
/* Mauvais - retire le focus sans alternative */
*:focus {
  outline: none;
}
```

---

### Tailles minimales

- **Zones cliquables** (boutons, liens) : minimum **44x44px**
- **Texte** : minimum **16px** pour le corps de texte
- **Icons seuls** : minimum **24x24px** avec zone de touch 44x44px

```css
.icon-button {
  width: 24px;
  height: 24px;
  padding: 10px; /* Crée une zone de 44x44px */
}
```

---

### Sémantique HTML

Toujours utiliser les balises HTML appropriées :

```html
<!-- ✅ Bon -->
<button type="button">Cliquer</button>
<a href="/page">Lien</a>
<h1>Titre principal</h1>

<!-- ❌ Mauvais -->
<div onclick="...">Cliquer</div>
<span class="link">Lien</span>
<div class="title">Titre principal</div>
```

---

### Textes alternatifs

```html
<!-- Images -->
<img src="logo.png" alt="Logo de l'entreprise">

<!-- Icônes avec signification -->
<button aria-label="Fermer">
  <CloseIcon />
</button>

<!-- Icônes décoratives -->
<span aria-hidden="true">
  <DecorativeIcon />
</span>
```

---

## 🔗 Ressources

### Fichiers du projet
- [`styles/colors.css`](../src/styles/colors.css) - Variables de couleurs
- [`styles/typography.css`](../src/styles/typography.css) - Variables typographiques
- [COMPOSANTS.md](./COMPOSANTS.md) - Liste des composants UI

### Outils externes
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Standards d'accessibilité
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Vérificateur de contraste
- [Google Fonts](https://fonts.google.com/specimen/Roboto) - Police Roboto
- [Placehold.co](https://placehold.co/) - Générateur d'aperçu de couleurs

---

## 📝 Checklist développeur

Avant de créer/modifier un composant, vérifier :

- [ ] ✅ Utiliser les variables CSS pour les couleurs (`var(--primary-color)`)
- [ ] ✅ Utiliser les variables CSS pour la typographie (`var(--heading-1)`)
- [ ] ✅ Respecter le système d'espacement (multiples de 8px)
- [ ] ✅ Vérifier le contraste des couleurs (minimum 4.5:1)
- [ ] ✅ Ajouter un focus visible (outline sur `:focus-visible`)
- [ ] ✅ Zones cliquables minimum 44x44px
- [ ] ✅ Utiliser les bonnes balises sémantiques HTML
- [ ] ✅ Ajouter les attributs ARIA si nécessaire
- [ ] ✅ Tester au clavier (navigation avec Tab)
- [ ] ✅ Tester en mode sombre

---

## 📅 Changelog

| Date | Modification | Auteur |
|------|--------------|--------|
| [Date] | Création du styleguide | [Nom] |