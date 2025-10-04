// utils/templateLoader.js
import fs from "fs/promises";
import path from "path";

const TEMPLATE_DIR = path.join(process.cwd(), "scripts/templates");

/**
 * Charge un template et remplace les variables {{VAR}}
 * @param {string} templatePath - Chemin relatif au dossier templates
 * @param {object} data - Données à injecter dans le template
 * @returns {Promise<string>}
 */
export async function loadTemplate(templatePath, data = {}) {
  try {
    const fullPath = path.join(TEMPLATE_DIR, templatePath);

    // Lire le fichier template
    let content = await fs.readFile(fullPath, "utf-8");

    // Remplacer toutes les variables {{VAR}}
    content = content.replace(/{{\s*([A-Z0-9_]+)\s*}}/g, (_, key) => {
      return key in data ? data[key] : `{{${key}}}`;
    });

    return content;
  } catch (err) {
    throw new Error(`Impossible de charger le template "${templatePath}" : ${err.message}`);
  }
}