/**
 * @file Hooks personnalisés pour le composant Select
 * @module components/ui/Select/Select.hooks
 * 
 * @version 1.1.1
 * @since 2025-10-21
 * @author Seb-Prod
 */

import { useState, useEffect, useCallback } from "react";
import type { Option } from "./Select.types";

interface UseSelectStateReturn {
  isOpen: boolean;
  selectedValue: string;
  focusedIndex: number;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  setSelectedValue: (value: string) => void;
  setFocusedIndex: (value: number | ((prev: number) => number)) => void;
}

/**
 * Gère l'état interne du composant Select.
 * 
 * @param initialValue - Valeur initiale sélectionnée
 * @returns État et setters pour le Select
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

interface UseSelectKeyboardParams {
  isOpen: boolean;
  focusedIndex: number;
  options: Option[];
  setFocusedIndex: (value: number | ((prev: number) => number)) => void;
  handleSelect: (option: Option) => void;
  closeDropdown: () => void;
}

/**
 * Gère la navigation au clavier dans le Select.
 * Navigation avec flèches haut/bas, sélection avec Entrée, fermeture avec Échap.
 * 
 * @param params - Paramètres de configuration
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

interface UseClickOutsideParams<T extends HTMLElement = HTMLElement> {
  ref: React.RefObject<T | null>;
  isActive: boolean;
  onClickOutside: () => void;
}

/**
 * Détecte les clics à l'extérieur d'un élément.
 * Utilisé pour fermer le menu déroulant.
 * 
 * @param params - Paramètres de configuration
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

interface UseAutoScrollParams {
  listRef: React.RefObject<HTMLUListElement | null>;
  isOpen: boolean;
  focusedIndex: number;
}

/**
 * Gère le scroll automatique vers l'option focalisée.
 * 
 * @param params - Paramètres de configuration
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

interface UseSelectHandlersParams {
  disabled: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  setSelectedValue: (value: string) => void;
  setFocusedIndex: (value: number | ((prev: number) => number)) => void;
  onChange?: (value: string) => void;
}

interface UseSelectHandlersReturn {
  handleToggle: () => void;
  handleSelect: (option: Option) => void;
  closeDropdown: () => void;
}

/**
 * Gère les handlers d'événements du Select.
 * Fournit les fonctions de toggle, sélection et fermeture.
 * 
 * @param params - Paramètres de configuration
 * @returns Handlers pour les événements du Select
 */
export const useSelectHandlers = ({
  disabled,
  setIsOpen,
  setSelectedValue,
  setFocusedIndex,
  onChange,
}: UseSelectHandlersParams): UseSelectHandlersReturn => {
  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, [setIsOpen, setFocusedIndex]);

  const handleSelect = useCallback(
    (option: Option) => {
      if (option.disabled) return;
      setSelectedValue(option.value);
      closeDropdown();
      onChange?.(option.value);
    },
    [closeDropdown, onChange, setSelectedValue]
  );

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
 * Synchronise la valeur externe avec l'état interne.
 * Permet d'utiliser le Select en mode contrôlé.
 * 
 * @param value - Valeur externe à synchroniser
 * @param setSelectedValue - Fonction pour mettre à jour la valeur interne
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