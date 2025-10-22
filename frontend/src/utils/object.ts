/**
 * @file Fonctions utilitaires pour la manipulation d’objets.
 * @module utils/object
 * @version 1.0.0
 * @since 2025-10-21
 * @author Seb-Prod
 */

/**
 * Supprime une ou plusieurs clés d’un objet et retourne une nouvelle copie sans ces propriétés.
 * 
 * Cette fonction est pure : elle **ne modifie pas l’objet d’origine**.
 * 
 * @template T - Type de l’objet source
 * @template K - Ensemble des clés à retirer
 * 
 * @param {T} obj - L’objet d’entrée
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