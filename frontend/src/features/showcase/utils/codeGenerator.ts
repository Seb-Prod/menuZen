export const generateComponentCode = (
  componentName: string,
  props: Record<string, unknown>,
  value?:string
): string => {
  const propsString = Object.entries(props)
    .map(([key, value]) => {
      if (typeof value === "string") return `${key}="${value}"`;
      if (typeof value === "number") return `${key}={${value}}`;
      if (typeof value === "boolean") return value ? key : `${key}={false}`;
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(" ");
  
  return `<${componentName} ${propsString}>${value}<${componentName}/>`;
};
