export function createTemplateData(name, type = 'component') {
  const baseData = {
    NAME: name,
    LOWER_NAME: name.toLowerCase(),
    KEBAB_NAME: name.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1),
    SNAKE_NAME: name.replace(/([A-Z])/g, '_$1').toLowerCase().slice(1),
    UPPER_NAME: name.toUpperCase(),
    TIMESTAMP: new Date().toISOString(),
    AUTHOR: process.env.USER || 'Developer',
    TYPE: type
  };

  // Données spécifiques selon le type
  const typeSpecificData = {
    hook: {
      HOOK_NAME: `use${name}`,
      HOOK_FILENAME: `use${name.toLowerCase()}`
    },
    page: {
      PAGE_NAME: `${name}Page`,
      PAGE_FILENAME: `${name.toLowerCase()}-page`
    }
  };

  return {
    ...baseData,
    ...(typeSpecificData[type] || {})
  };
}