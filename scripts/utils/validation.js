export function isValidComponentName(name) {
  const regex = /^[A-Z][A-Za-z0-9]*$/;
  return regex.test(name);
}