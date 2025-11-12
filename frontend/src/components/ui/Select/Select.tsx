/**
 * @file Composant Select
 * @module components/ui/Select
 */

import { useRef, type JSX } from "react";
import styles from "./Select.module.css";
import { DEFAULTS, type Props } from "./Select.types";
import { ChevronIcon } from "@/components/ui";
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
 * Composant **Select** — Liste déroulante personnalisée et accessible.
 * 
 * Implémente une liste déroulante stylisée avec navigation au clavier,
 * gestion du focus, scroll automatique et fermeture au clic extérieur.
 * Supporte différentes variantes, tailles et alignements.
 * 
 * @component
 * @version 1.1.0
 * @since 2025-10-21
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * @returns {JSX.Element} Liste déroulante personnalisée avec options sélectionnables.
 * 
 * @example
 * <Select 
 *   options={[
 *     { value: 'fr', label: 'Français' }, 
 *     { value: 'en', label: 'English' }
 *   ]}
 *   onChange={(v) => console.log('Langue:', v)}
 * />
 * 
 * @example
 * <Select
 *   options={myOptions}
 *   value="b"
 *   variant="primary"
 *   size="large"
 *   placeholder="Choisir une option"
 * />
 * 
 * @example
 * <Select
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2', disabled: true }
 *   ]}
 * />
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut
 */
const Select = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const { value, disabled, onChange, options, placeholder, variant, size, align, fullWidth, className, id, name } = props;

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
  );

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
                  className={`${styles.item} ${isSelected ? styles.active : ''}`}
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