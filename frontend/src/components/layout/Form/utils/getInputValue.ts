export const getInputValue = (input: HTMLInputElement): string => {
  return input.type === 'checkbox' ? input.checked.toString() : input.value;
};