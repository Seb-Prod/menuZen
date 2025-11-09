/**
 * @file Point d'entrée centralisé pour tous les composants UI
 * @module components/ui
 * @description
 * Barrel file principal qui exporte l'ensemble des composants UI de l'application.
 * Permet d'importer tous les composants depuis un point d'entrée unique pour
 * simplifier et standardiser les imports dans l'application.
 * 
 * @version 1.0.0
 * @since 2025-11-08
 * @author Seb-Prod
 * 
 * @example
 * // Import de plusieurs composants
 * import { Button, Spinner, Heading } from '@/components/ui';
 * 
 * @example
 * // Import d'un seul composant
 * import { Separator } from '@/components/ui';
 * 
 * @example
 * // Utilisation combinée
 * import { Button, Text, ThemeToggle } from '@/components/ui';
 * 
 * function MyComponent() {
 *   return (
 *     <div>
 *       <ThemeToggle />
 *       <Text>Hello</Text>
 *       <Button>Click me</Button>
 *     </div>
 *   );
 * }
 */

/**
 * Composant Button - Bouton interactif personnalisable.
 * @see {@link Button} pour la documentation complète.
 */
export { default as Button } from './Button';

/**
 * Composant Spinner - Indicateur de chargement animé.
 * @see {@link Spinner} pour la documentation complète.
 */
export { default as Spinner } from './Spinner';

/**
 * Composant Heading - Titres et en-têtes typographiques.
 * @see {@link Heading} pour la documentation complète.
 */
export { default as Heading } from './Heading';

/**
 * Composant Text - Texte stylisé et formaté.
 * @see {@link Text} pour la documentation complète.
 */
export { default as Text } from './Text';

/**
 * Composant Table - Tableau de données structuré.
 * @see {@link Table} pour la documentation complète.
 */
export { default as Table } from './Table';

/**
 * Composant Select - Menu de sélection déroulant.
 * @see {@link Select} pour la documentation complète.
 */
export { default as Seclect } from './Select';

/**
 * Composant ThemeToggle - Bouton de basculement de thème clair/sombre.
 * @see {@link ThemeToggle} pour la documentation complète.
 */
export { default as ThemeToggle } from './ThemeToggle';

/**
 * Composant Logo - Logo de l'application.
 * @see {@link Logo} pour la documentation complète.
 */
export { default as Logo } from './Logo';

/**
 * Composant Switch - Interrupteur on/off.
 * @see {@link Switch} pour la documentation complète.
 */
export { default as Switch } from './Switch';

/**
 * Composant Separator - Séparateur horizontal ou vertical.
 * @see {@link Separator} pour la documentation complète.
 */
export { Separator } from './Separator';