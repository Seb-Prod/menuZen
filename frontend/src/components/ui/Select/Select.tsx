/**
 * @file Composant Select.
 * @module components/ui/Select
 */

import { useState, useRef, useEffect, useCallback, type JSX } from "react";
import styles from "./Select.module.css";
import { SELECT_DEFAULTS, type SelectProps, type SelectOption } from "./Select.types";

/**
 * Composant Select - Liste déroulante personnalisée.
 * * Ce composant implémente une liste déroulante personnalisée, stylisée,
 * accessible et navigable au clavier. Il gère l'état d'ouverture, la
 * sélection, le focus au clavier, le scroll automatique vers l'option
 * focalisée, et la fermeture lors d'un clic extérieur.
 * * @component
 * * @param {SelectProps} props - Les propriétés du composant.
 * @param {SelectVariant} [props.variant='default'] - Schéma de couleur/style du sélecteur.
 * @param {SelectOption[]} [props.options=[]] - Liste des options disponibles.
 * @param {SelectSize} [props.size='medium'] - Taille prédéfinie du sélecteur (small, medium, large).
 * @param {string} [props.value] - Valeur sélectionnée (contrôlée).
 * @param {SelectAlign} [props.align='left'] - Position horizontale du menu déroulant (left, right).
 * @param {(value: string) => void} [props.onChange] - Fonction de rappel appelée lors de la sélection d'une option.
 * @param {string} [props.placeholder='Sélectionner...'] - Texte affiché lorsqu'aucune option n'est sélectionnée.
 * @param {boolean} [props.disabled=false] - Si vrai, désactive le sélecteur.
 * @param {string} [props.className=''] - Classes CSS personnalisées supplémentaires appliquées au conteneur.
 * @param {string} [props.name] - Nom utilisé pour le champ de formulaire caché (<input type="hidden">).
 * @param {string} [props.id] - ID pour l'élément bouton (<button>), utilisé pour l'accessibilité.
 * * Les types détaillés sont définis dans {@link SelectProps} et {@link SelectOption}.
 * * @example
 * // Sélecteur basique
 * <Select 
 * options={[{ value: 'fr', label: 'Français' }, { value: 'en', label: 'English' }]}
 * onChange={(v) => console.log('Langue:', v)}
 * />
 * * @example
 * // Sélecteur désactivé avec une valeur prédéfinie
 * <Select
 * options={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }]}
 * value="b"
 * disabled
 * />
 * * @example
 * // Sélecteur de grande taille avec alignement à droite
 * <Select
 * options={myOptions}
 * size="large"
 * align="right"
 * placeholder="Choisir une catégorie"
 * />
 */

const Select = ({
  variant = SELECT_DEFAULTS.variant,
  options = SELECT_DEFAULTS.options,
  size = SELECT_DEFAULTS.size,
  value,
  align = SELECT_DEFAULTS.align,
  onChange,
  placeholder = SELECT_DEFAULTS.placeholder,
  disabled = SELECT_DEFAULTS.disabled,
  className = "",
  name,
  id,
}: SelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value ?? "");
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const selectRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // --- Synchronisation externe ---
  useEffect(() => {
    if (value !== undefined) setSelectedValue(value);
  }, [value]);

  // --- Fermer le dropdown ---
  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, []);

  // --- Sélection d'une option ---
  const handleSelect = useCallback(
    (option: SelectOption) => {
      if (option.disabled) return;
      setSelectedValue(option.value);
      closeDropdown();
      onChange?.(option.value);
    },
    [closeDropdown, onChange]
  );

  // --- Toggle ouverture/fermeture ---
  const handleToggle = useCallback(() => {
    if (!disabled) setIsOpen(prev => !prev);
  }, [disabled]);

  // --- Fermer lors d’un clic extérieur ---
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (!selectRef.current?.contains(e.target as Node)) closeDropdown();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeDropdown]);

  // --- Navigation clavier ---
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const enabledOptions = options.filter(opt => !opt.disabled);

      switch (e.key) {
        case "Escape":
          return closeDropdown();

        case "ArrowDown":
          e.preventDefault();
          setFocusedIndex(i => (i + 1) % enabledOptions.length);
          break;

        case "ArrowUp":
          e.preventDefault();
          setFocusedIndex(i => (i - 1 + enabledOptions.length) % enabledOptions.length);
          break;

        case "Enter":
          e.preventDefault();
          if (focusedIndex >= 0 && enabledOptions[focusedIndex])
            handleSelect(enabledOptions[focusedIndex]);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusedIndex, options, handleSelect, closeDropdown]);

  // --- Scroll auto vers l’élément focusé ---
  useEffect(() => {
    if (!isOpen || focusedIndex < 0) return;
    listRef.current?.children[focusedIndex]?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [focusedIndex, isOpen]);

  const selectedOption = options.find(opt => opt.value === selectedValue);
  const displayText = selectedOption?.label ?? placeholder;

  // --- Classes dynamiques ---
  const buttonClass = [
    styles.selectButton,
    styles[variant],
    styles[size],
    isOpen && styles.open,
  ]
    .filter(Boolean)
    .join(" ");

  const dropdownClass = [
    styles.selectDropdown,
    styles[`${variant}Dropdown`],
    styles[`${size}Dropdown`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={selectRef}
      className={[styles.selectContainer, styles[align], className].join(" ")}
      data-disabled={disabled}
    >
      <input type="hidden" name={name} value={selectedValue} />

      <button
        type="button"
        id={id}
        className={buttonClass}
        onClick={handleToggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.selectText}>{displayText}</span>
        <svg
          className={`${styles.selectIcon} ${isOpen ? styles.rotate : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className={dropdownClass}>
          <ul ref={listRef} role="listbox" className={styles.selectList} aria-labelledby={id}>
            {options.map((opt, index) => {
              const isSelected = opt.value === selectedValue;
              const isFocused = index === focusedIndex;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={opt.disabled}
                  className={[
                    styles.selectOption,
                    styles[`${variant}Option`],
                    isSelected && styles.selected,
                    isFocused && styles.focused,
                    opt.disabled && styles.disabled,
                  ]
                    .filter(Boolean)
                    .join(" ")}
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