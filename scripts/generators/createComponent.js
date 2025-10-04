/**
 * @fileoverview Générateur avec support de structures complexes pour les features
 */
import fs from "fs/promises";
import path from "path";
import { success, info, error } from "../utils/colors.js";
import { waitForEnter } from "../utils/waitForEnter.js";
import { TEMPLATE_CONFIGS, createTemplateData, loadTemplate } from "./utils/templateUtils/index.js";
import { validateParams } from "./utils/validateParams.js";
import { TYPES, FEATURE_FOLDERS } from "./types/types.js";

export async function create(name, componentPath, type = "component") {
  const basePath = path.join(componentPath, name);
  const config = TYPES[type];
  const templates = TEMPLATE_CONFIGS[type];
  
  if (!config || !templates) throw new Error(`Type "${type}" invalide`);
  
  try {
    await validateParams(name, componentPath, type);
    console.log(info(`🚀 Création ${config.name} ${name}...`));
    
    // Créer le dossier principal
    await fs.mkdir(basePath, { recursive: true });
    
    // Si c'est une feature, créer les sous-dossiers vides
    if (type === "feature") {
      const subfolders = FEATURE_FOLDERS;
      await Promise.all(
        subfolders.map(folder => fs.mkdir(path.join(basePath, folder), { recursive: true }))
      );
    }
    
    const templateData = createTemplateData(name, type);
    const files = [];
    
    // Une seule boucle pour charger et écrire
    for (const { template, filename, subfolder } of templates) {
      // Déterminer le chemin du fichier (avec sous-dossier si spécifié)
      const fileDir = subfolder ? path.join(basePath, subfolder) : basePath;
      const filePath = path.join(fileDir, filename(name));
      
      // Créer le sous-dossier si nécessaire (pour les autres types)
      if (subfolder && type !== "feature") {
        await fs.mkdir(fileDir, { recursive: true });
      }
      
      const content = await loadTemplate(template, templateData);
      await fs.writeFile(filePath, content);
      files.push(path.relative(process.cwd(), filePath));
    }

    // Affichage spécial pour les features
    if (type === "feature") {
      console.log(success(`✅ ${config.emoji} ${config.name} ${name} créé !`));
      console.log(info(`📁 Structure créée avec dossiers : components, hooks, types, utils`));
      console.log(info(`📄 ${files.length} fichier(s) : ${files.join(", ")}`));
    } else {
      console.log(success(`✅ ${config.emoji} ${config.name} ${name} créé !`));
      console.log(info(`📁 ${files.length} fichiers : ${files.join(", ")}`));
    }
    
    await waitForEnter();
    return { name, type, path: basePath, files };
    
  } catch (err) {
    try { await fs.rmdir(basePath, { recursive: true }); } catch {}
    console.log(error(`❌ ${err.message}`));
    await waitForEnter();
    throw err;
  }
}

// Factory pattern avec une approche plus DRY
const createFactory = (type) => (name, componentPath) => create(name, componentPath, type);

export const createComponent = createFactory("component");
export const createUI = createFactory("ui");
export const createHook = createFactory("hook");
export const createPage = createFactory("page");
export const createFeature = createFactory("feature");

export const getAvailableTypes = () => Object.keys(TYPES);
export const getTypeConfig = (type) => TEMPLATE_CONFIGS[type] || null;