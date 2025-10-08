export const formatType = <T extends readonly unknown[]>(values: T): string => {
  return values.map(v => typeof v === 'string' ? `"${v}"` : v).join(' | ');
};