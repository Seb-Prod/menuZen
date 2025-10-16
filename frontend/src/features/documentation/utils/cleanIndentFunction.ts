export const cleanIndentFunction = (str: string) => {
  const lines = str.split('\n').filter(line => line.trim() !== '');
  if (lines.length === 0) return '';
  
  const minIndent = Math.min(
    ...lines.map(line => line.match(/^\s*/)?.[0].length || 0)
  );
  return lines.map(line => line.slice(minIndent)).join('\n').trim();
};