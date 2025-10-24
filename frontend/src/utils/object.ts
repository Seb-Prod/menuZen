/**
 * @file Fonctions utilitaires pour la manipulation d'objets et de classes CSS.
 * @module utils/object
 * @version 1.0.0
 * @since 2025-10-21
 * @author Seb-Prod
 */

/**
 * Supprime une ou plusieurs clés d'un objet et retourne une nouvelle copie sans ces propriétés.
 * 
 * Cette fonction est pure : elle **ne modifie pas l'objet d'origine**.
 * 
 * @template T - Type de l'objet source
 * @template K - Ensemble des clés à retirer
 * 
 * @param {T} obj - L'objet d'entrée
 * @param {K[]} keys - Les clés à exclure du résultat
 * 
 * @returns {Omit<T, K>} Un nouvel objet contenant toutes les clés sauf celles exclues
 * 
 * @example
 * const user = { id: 1, name: "Alice", password: "secret" };
 * const safeUser = omit(user, ["password"]);
 * // Résultat : { id: 1, name: "Alice" }
 * 
 * @example
 * const settings = { theme: "dark", debug: true, version: "1.2.0" };
 * const publicSettings = omit(settings, ["debug"]);
 * // Résultat : { theme: "dark", version: "1.2.0" }
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as K))
  ) as Omit<T, K>;
}

/**
 * Combine plusieurs classes CSS en une seule chaîne de caractères.
 * 
 * Cette fonction filtre automatiquement les valeurs falsy (false, undefined, null, '')
 * et ne conserve que les chaînes valides. Très utile pour construire des classes
 * conditionnelles dans les composants React.
 * 
 * @param {...(string | boolean | undefined)[]} classes - Liste de classes CSS ou conditions booléennes
 * 
 * @returns {string} Une chaîne contenant toutes les classes valides séparées par des espaces
 * 
 * @example
 * // Classes simples
 * classNames('btn', 'btn-primary');
 * // Résultat : "btn btn-primary"
 * 
 * @example
 * // Classes conditionnelles
 * const isActive = true;
 * const isDisabled = false;
 * classNames('btn', isActive && 'active', isDisabled && 'disabled');
 * // Résultat : "btn active"
 * 
 * @example
 * // Utilisation dans un composant React
 * const Button = ({ variant, disabled, className }) => {
 *   const classes = classNames(
 *     'button',
 *     `button-${variant}`,
 *     disabled && 'button-disabled',
 *     className
 *   );
 *   return <button className={classes}>Click me</button>;
 * };
 * 
 * @example
 * // Gestion des valeurs undefined
 * classNames('btn', undefined, false, '', 'primary');
 * // Résultat : "btn primary"
 */
export const classNames = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};