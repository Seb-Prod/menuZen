const spinnerProps = [
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
    description: "Contenu affiché sous le spinner",
    required: false,
    default: "Chargement en cours",
  },
];

export default spinnerProps;