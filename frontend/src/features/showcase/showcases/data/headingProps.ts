export default [
  {
    name: "variant",
    type: "1 | 2 | 3 | 4 | 5 | 6",
    default: "1",
    description: "Niveau du heading (h1 à h6)"
  },
  {
    name: "color",
    type: '"primary" | "secondary" | "dark" | "light" | "neutral" | "warning" | "success"',
    default: '"primary"',
    description: "Couleur du texte"
  },
  {
    name: "children",
    type: "ReactNode",
    default: "-",
    description: "Contenu du heading",
    required:true
  }
];