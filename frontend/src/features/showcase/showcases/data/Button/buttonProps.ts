const buttonProps = [
  {
    name: "size",
    type: '"small" | "medium" | "large"',
    description: "Taille du bouton",
    required: false,
    default: '"medium"',
  },
  {
    name: "variant",
    type: '"primary" | "secondary" | "neutral" | "warning"',
    description: "Style visuel du bouton",
    required: false,
    default: '"primary"',
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Contenu affiché dans le bouton",
    required: true,
  },
  {
    name: "onClick",
    type: "() => void",
    description: "Fonction appelée lors du clic",
    required: false,
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Désactive le bouton",
    required: false,
    default: "false",
  },
];

export default buttonProps;