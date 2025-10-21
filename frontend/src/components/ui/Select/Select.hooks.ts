/**
 * @file Hooks personnalisés pour le composant Select.
 * @module components/ui/Select/Select.hooks
 * @version 1.0.0
 * @since 2025-10-21
 * @author Seb-Prod
 */

import { useState, useEffect, useCallback } from "react";
import type { SelectOption } from "./Select.types";

/**
 * Interface pour les valeurs de retour du hook useSelectState.
 */
interface UseSelectStateReturn {
  /** Indique si le menu déroulant est ouvert */
  isOpen: boolean;
  /** Valeur actuellement sélectionnée */
  selectedValue: string;
  /** Index de l'option actuellement focalisée */
  focusedIndex: number;
  /** Fonction pour définir l'état d'ouverture */
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  /** Fonction pour définir la valeur sélectionnée */
  setSelectedValue: (value: string) => void;
  /** Fonction pour définir l'index de l'option focalisée */
  setFocusedIndex: (value: number | ((prev: number) => number)) => void;
}

/**
 * Hook pour gérer l'état interne du composant Select.
 * 
 * Gère l'ouverture/fermeture du menu, la valeur sélectionnée et l'index
 * de l'option actuellement focalisée au clavier.
 * 
 * @param {string} [initialValue] - Valeur initiale sélectionnée.
 * @returns {UseSelectStateReturn} État et setters pour le Select.
 */
export const useSelectState = (initialValue?: string): UseSelectStateReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue ?? "");
  const [focusedIndex, setFocusedIndex] = useState(-1);

  return {
    isOpen,
    selectedValue,
    focusedIndex,
    setIsOpen,
    setSelectedValue,
    setFocusedIndex,
  };
};

/**
 * Interface pour les paramètres du hook useSelectKeyboard.
 */
interface UseSelectKeyboardParams {
  /** Indique si le menu déroulant est ouvert */
  isOpen: boolean;
  /** Index de l'option actuellement focalisée */
  focusedIndex: number;
  /** Liste des options disponibles */
  options: SelectOption[];
  /** Fonction pour définir l'index de l'option focalisée */
  setFocusedIndex: (value: number | ((prev: number) => number)) => void;
  /** Fonction pour sélectionner une option */
  handleSelect: (option: SelectOption) => void;
  /** Fonction pour fermer le menu déroulant */
  closeDropdown: () => void;
}

/**
 * Hook pour gérer la navigation au clavier dans le Select.
 * 
 * Implémente la navigation avec les flèches haut/bas, la sélection avec Entrée,
 * et la fermeture avec Échap. Filtre automatiquement les options désactivées.
 * 
 * @param {UseSelectKeyboardParams} params - Paramètres de configuration.
 * @returns {void}
 */
export const useSelectKeyboard = ({
  isOpen,
  focusedIndex,
  options,
  setFocusedIndex,
  handleSelect,
  closeDropdown,
}: UseSelectKeyboardParams): void => {
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
          if (focusedIndex >= 0 && enabledOptions[focusedIndex]) {
            handleSelect(enabledOptions[focusedIndex]);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusedIndex, options, handleSelect, closeDropdown, setFocusedIndex]);
};

/**
 * Interface pour les paramètres du hook useClickOutside.
 */
interface UseClickOutsideParams<T extends HTMLElement = HTMLElement> {
  /** Référence à l'élément conteneur */
  ref: React.RefObject<T | null>;
  /** Indique si la détection est active */
  isActive: boolean;
  /** Fonction appelée lors d'un clic extérieur */
  onClickOutside: () => void;
}

/**
 * Hook pour détecter les clics à l'extérieur d'un élément.
 * 
 * Utile pour fermer le menu déroulant lorsque l'utilisateur clique
 * en dehors du composant Select.
 * 
 * @param {UseClickOutsideParams} params - Paramètres de configuration.
 * @returns {void}
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>({
  ref,
  isActive,
  onClickOutside,
}: UseClickOutsideParams<T>): void => {
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive, onClickOutside, ref]);
};

/**
 * Interface pour les paramètres du hook useAutoScroll.
 */
interface UseAutoScrollParams {
  /** Référence à l'élément de liste */
  listRef: React.RefObject<HTMLUListElement | null>;
  /** Indique si le menu déroulant est ouvert */
  isOpen: boolean;
  /** Index de l'option actuellement focalisée */
  focusedIndex: number;
}

/**
 * Hook pour gérer le scroll automatique vers l'option focalisée.
 * 
 * Fait défiler automatiquement la liste pour que l'option focalisée
 * au clavier soit toujours visible à l'écran.
 * 
 * @param {UseAutoScrollParams} params - Paramètres de configuration.
 * @returns {void}
 */
export const useAutoScroll = ({
  listRef,
  isOpen,
  focusedIndex,
}: UseAutoScrollParams): void => {
  useEffect(() => {
    if (!isOpen || focusedIndex < 0) return;
    
    listRef.current?.children[focusedIndex]?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [focusedIndex, isOpen, listRef]);
};

/**
 * Interface pour les paramètres du hook useSelectHandlers.
 */
interface UseSelectHandlersParams {
  /** Indique si le composant est désactivé */
  disabled: boolean;
  /** Fonction pour définir l'état d'ouverture */
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  /** Fonction pour définir la valeur sélectionnée */
  setSelectedValue: (value: string) => void;
  /** Fonction pour définir l'index de l'option focalisée */
  setFocusedIndex: (value: number | ((prev: number) => number)) => void;
  /** Fonction de callback externe appelée lors du changement */
  onChange?: (value: string) => void;
}

/**
 * Interface pour les valeurs de retour du hook useSelectHandlers.
 */
interface UseSelectHandlersReturn {
  /** Fonction pour gérer le toggle du menu */
  handleToggle: () => void;
  /** Fonction pour gérer la sélection d'une option */
  handleSelect: (option: SelectOption) => void;
  /** Fonction pour fermer le menu déroulant */
  closeDropdown: () => void;
}

/**
 * Hook pour gérer les handlers d'événements du Select.
 * 
 * Fournit les fonctions de gestion du toggle, de la sélection d'options
 * et de la fermeture du menu déroulant.
 * 
 * @param {UseSelectHandlersParams} params - Paramètres de configuration.
 * @returns {UseSelectHandlersReturn} Handlers pour les événements du Select.
 */
export const useSelectHandlers = ({
  disabled,
  setIsOpen,
  setSelectedValue,
  setFocusedIndex,
  onChange,
}: UseSelectHandlersParams): UseSelectHandlersReturn => {
  // Fermeture du menu déroulant
  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, [setIsOpen, setFocusedIndex]);

  // Sélection d'une option
  const handleSelect = useCallback(
    (option: SelectOption) => {
      if (option.disabled) return;
      setSelectedValue(option.value);
      closeDropdown();
      onChange?.(option.value);
    },
    [closeDropdown, onChange, setSelectedValue]
  );

  // Toggle ouverture/fermeture
  const handleToggle = useCallback(() => {
    if (!disabled) setIsOpen(prev => !prev);
  }, [disabled, setIsOpen]);

  return {
    handleToggle,
    handleSelect,
    closeDropdown,
  };
};

/**
 * Hook pour synchroniser la valeur externe avec l'état interne.
 * 
 * Permet d'utiliser le Select en mode contrôlé en synchronisant
 * la prop `value` avec l'état interne.
 * 
 * @param {string} [value] - Valeur externe à synchroniser.
 * @param {(value: string) => void} setSelectedValue - Fonction pour mettre à jour la valeur interne.
 * @returns {void}
 */
export const useSyncExternalValue = (
  value: string | undefined,
  setSelectedValue: (value: string) => void
): void => {
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value, setSelectedValue]);
};