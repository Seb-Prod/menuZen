/**
 * @file Composant Select.
 * @module components/ui/Select
 */

import { useRef, type JSX } from "react";
import styles from "./Select.module.css";
import { SELECT_DEFAULTS, type SelectProps } from "./Select.types";
import ChevronIcon from "../ChevronIcon";
import {
  useSelectState,
  useSelectHandlers,
  useSelectKeyboard,
  useClickOutside,
  useAutoScroll,
  useSyncExternalValue
} from "./Select.hooks";

/**
 * Composant Select - Liste déroulante personnalisée.
 * 
 * Implémente une liste déroulante stylisée et accessible avec navigation au clavier,
 * gestion du focus, scroll automatique et fermeture au clic extérieur.
 * Supporte différentes variantes (couleurs), tailles et alignements.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @param {SelectProps} props - Les propriétés du composant.
 * @param {SelectOption[]} props.options - Liste des options disponibles dans le menu déroulant.
 * @param {string} [props.value] - Valeur sélectionnée (mode contrôlé).
 * @param {SelectVariant} [props.variant='neutral'] - Schéma de couleur du sélecteur (primary, secondary, warning, neutral).
 * @param {SelectSize} [props.size='medium'] - Taille prédéfinie du sélecteur (small, medium, large).
 * @param {SelectAlign} [props.align='left'] - Position horizontale du sélecteur dans son conteneur (left, center, right).
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
 * @see {@link SelectProps}
 * @see {@link SelectOption}
 * @see {@link SELECT_DEFAULTS}
 */
const Select = ({
  options = SELECT_DEFAULTS.options,
  value,
  variant = SELECT_DEFAULTS.variant,
  size = SELECT_DEFAULTS.size,
  align = SELECT_DEFAULTS.align,
  fullWidth = SELECT_DEFAULTS.fullWidth,
  onChange,
  placeholder = SELECT_DEFAULTS.placeholder,
  disabled = SELECT_DEFAULTS.disabled,
  className = SELECT_DEFAULTS.className,
  name,
  id,
}: SelectProps): JSX.Element => {
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
  const containerClasses = [
    styles.selectContainer,
    `component-${align}`,
    fullWidth && styles.fullWidth,
    className
  ]
    .filter(Boolean)
    .join(" ");

  const buttonClasses = [
    styles.selectButton,
    `component-${variant}`,
    `component-${size}`,
    isOpen && styles.open
  ]
    .filter(Boolean)
    .join(" ");

  const dropdownClasses = [
    styles.selectDropdown,
    `component-${variant}`,
    `component-${size}`,
    `no-hover`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={selectRef}
      className={containerClasses}
      data-disabled={disabled}
    >
      {/* Input caché pour les formulaires */}
      <input type="hidden" name={name} value={selectedValue} />

      {/* Bouton principal */}
      <button
        type="button"
        id={id}
        className={buttonClasses}
        onClick={handleToggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.selectText}>{displayText}</span>
        <ChevronIcon isOpen={isOpen} type="triangle" size={size} />
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className={dropdownClasses}>
          <ul ref={listRef} role="listbox" className={styles.selectList} aria-labelledby={id}>
            {options.map((opt, index) => {
              const isSelected = opt.value === selectedValue;
              
              const optionClasses = [
                styles.selectOption,
                `component-${variant}`,
                isSelected && `active`,
                opt.disabled && styles.disabled
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={opt.disabled}
                  className={optionClasses}
                  onClick={() => handleSelect(opt)}
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