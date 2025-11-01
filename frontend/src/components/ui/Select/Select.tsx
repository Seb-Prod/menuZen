/**
 * @file Composant Select.
 * @module components/ui/Select
 */

import { useRef, type JSX } from "react";
import styles from "./Select.module.css";
import { DEFAULTS, type Props } from "./Select.types";
import ChevronIcon from "../ChevronIcon";
import {
  useSelectState,
  useSelectHandlers,
  useSelectKeyboard,
  useClickOutside,
  useAutoScroll,
  useSyncExternalValue
} from "./Select.hooks";
import { classNames } from "@/utils/object";

/**
 * Composant Select - Liste déroulante personnalisée.
 * 
 * Implémente une liste déroulante stylisée et accessible avec navigation au clavier,
 * gestion du focus, scroll automatique et fermeture au clic extérieur.
 * Supporte différentes variantes (couleurs), tailles et alignements.
 * 
 * @component
 * @version 1.1.0
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @param {Option[]} props.options - Liste des options disponibles dans le menu déroulant.
 * @param {string} [props.value] - Valeur sélectionnée (mode contrôlé).
 * @param {UiVariant} [props.variant='neutral'] - Schéma de couleur du sélecteur (primary, secondary, warning, neutral).
 * @param {UiSize} [props.size='medium'] - Taille prédéfinie du sélecteur (small, medium, large).
 * @param {UiAlign} [props.align='left'] - Position horizontale du sélecteur dans son conteneur (left, center, right).
 * @param {(value: string) => void} [props.onChange] - Fonction appelée lors de la sélection d'une option.
 * @param {string} [props.placeholder='Sélectionnez une option'] - Texte affiché lorsqu'aucune option n'est sélectionnée.
 * @param {boolean} [props.disabled=false] - Si vrai, désactive le sélecteur.
 * @param {boolean} [props.fullWidth=false] - Si vrai, prend toute la largeur du parent.
 * @param {string} [props.className=''] - Classes CSS personnalisées supplémentaires.
 * @param {string} [props.name] - Nom du champ de formulaire caché (pour soumission de formulaire).
 * @param {string} [props.id] - ID du bouton pour l'accessibilité (aria-labelledby).
 * 
 * @returns {JSX.Element} L'élément Select React (JSX).
 * 
 * @example
 * // Sélecteur basique avec options
 * <Select 
 *   options={[
 *     { value: 'fr', label: 'Français' }, 
 *     { value: 'en', label: 'English' }
 *   ]}
 *   onChange={(v) => console.log('Langue:', v)}
 * />
 * 
 * @example
 * // Sélecteur contrôlé avec valeur prédéfinie
 * <Select
 *   options={[
 *     { value: 'a', label: 'Option A' }, 
 *     { value: 'b', label: 'Option B' }
 *   ]}
 *   value="b"
 *   disabled
 * />
 * 
 * @example
 * // Sélecteur personnalisé avec variante et taille
 * <Select
 *   options={myOptions}
 *   variant="primary"
 *   size="large"
 *   align="center"
 *   placeholder="Choisir une catégorie"
 * />
 * 
 * @example
 * // Sélecteur avec options désactivées
 * <Select
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2', disabled: true },
 *     { value: '3', label: 'Option 3' }
 *   ]}
 * />
 * 
 * @see {@link Props}
 * @see {@link Option}
 * @see {@link DEFAULTS}
 */
const Select = (inputProps: Props): JSX.Element => {
  const { value, disabled, onChange, options, placeholder, variant, size, align, fullWidth, className, id, name } = { ...DEFAULTS, ...inputProps }
  // Références DOM
  const selectRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // État du composant
  const {
    isOpen,
    selectedValue,
    focusedIndex,
    setIsOpen,
    setSelectedValue,
    setFocusedIndex
  } = useSelectState(value);

  // Handlers d'événements
  const { handleToggle, handleSelect, closeDropdown } = useSelectHandlers({
    disabled,
    setIsOpen,
    setSelectedValue,
    setFocusedIndex,
    onChange
  });

  // Synchronisation avec la prop value externe
  useSyncExternalValue(value, setSelectedValue);

  // Navigation au clavier
  useSelectKeyboard({
    isOpen,
    focusedIndex,
    options,
    setFocusedIndex,
    handleSelect,
    closeDropdown
  });

  // Fermeture au clic extérieur
  useClickOutside({
    ref: selectRef,
    isActive: isOpen,
    onClickOutside: closeDropdown
  });

  // Scroll automatique vers l'élément focalisé
  useAutoScroll({
    listRef,
    isOpen,
    focusedIndex
  });

  // Détermination du texte à afficher
  const selectedOption = options.find(opt => opt.value === selectedValue);
  const displayText = selectedOption?.label ?? placeholder;

  // Construction des classes CSS
  const classes = classNames(
    styles.selectContainer,
    `component-${variant}`,
    `component-${size}`,
    `component-${align}`,
    fullWidth && styles.fullWidth,
    className
  )

  return (
    <div
      ref={selectRef}
      className={classes}
      data-disabled={disabled}
    >
      {/* Input caché pour les formulaires */}
      <input type="hidden" name={name} value={selectedValue} />

      {/* Bouton principal */}
      <button
        type="button"
        id={id}
        className={styles.main}
        onClick={handleToggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{displayText}</span>
        <ChevronIcon isOpen={isOpen} type="triangle" size={size} variant="none" />
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className={styles.list}>
          <ul ref={listRef} role="listbox" className={styles.selectList} aria-labelledby={id}>
            {options.map((opt, index) => {
              const isSelected = opt.value === selectedValue;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={opt.disabled}
                  className={`${styles.item} ${isSelected ? styles.active : ''}`} onClick={() => handleSelect(opt)}
                  onMouseEnter={() => !opt.disabled && setFocusedIndex(index)}
                >
                  {opt.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;