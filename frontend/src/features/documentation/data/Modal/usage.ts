/**
 * @file Exemples d'utilisation du composant
 * @module features/documentation/data/Modal/usage
 * @description
 * Code examples et documentation d'usage
 * 
 * @version 1.0.0
 * @since 2025-11-10
 * @author Seb-Prod
 */

export const usageExample = `import Modal from "@/components/layout/Modal";

export default function MyComponent() {
  return (
    <Modal isOpen={isOpen} onClose={handleClose} variant="primary">
      <h2>Titre de la modale</h2>
      <p>Contenu de la modale</p>
    </Modal>
  );
}`;