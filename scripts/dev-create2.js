#!/usr/bin/env node
import inquirer from "inquirer";
import { info, success, error } from "./utils/colors.js";
import { clearConsole } from "./utils/clearConsole.js";
import { createComponent } from "./generators/createComponent.js";
import { isValidComponentName } from "./utils/validation.js";
import fs from "fs/promises";
import path from "path";

// ========================
// Fonction pour lister les répertoires
// ========================
async function getDirectories(dirPath) {
  try {
    const items = await fs.readdir(dirPath, { withFileTypes: true });
    return items
      .filter(item => item.isDirectory())
      .map(item => item.name)
      .sort();
  } catch (err) {
    return [];
  }
}

// ========================
// Lancement principal
// ========================
async function run() {
  clearConsole();
  console.log(info("⚛️  Générateur de composants React TypeScript"));
   
  // Vérifier que le dossier frontend existe
  try {
    await fs.access('frontend');
  } catch {
    console.log(error("❌ Le dossier 'frontend' n'existe pas dans ce répertoire."));
    console.log(info("💡 Assurez-vous d'exécuter ce script depuis le répertoire racine de votre projet."));
    return;
  }
 
  try {
    // Menu pour choisir le type de composant
    const { mode } = await inquirer.prompt([
      {
        type: "list",
        name: "mode",
        message: "Quel type de composant voulez-vous créer ?",
        choices: [
          {
             name: "🧩 Composant standard",
             value: "default"
           },
          {
             name: "🎨 Composant UI",
             value: "ui"
           },
          {
             name: "🗂️  Composant spécifique",
             value: "specific"
           },
        ],
      },
    ]);

    let selectedDirectory = "";
    
    // Si mode spécifique, demander le répertoire
    if (mode === "specific") {
      const componentsPath = path.join('frontend', 'src', 'components');
      const directories = await getDirectories(componentsPath);
      
      if (directories.length === 0) {
        console.log(error("❌ Aucun répertoire trouvé dans frontend/src/components"));
        return;
      }

      const { directory } = await inquirer.prompt([
        {
          type: "list",
          name: "directory",
          message: "Dans quel répertoire voulez-vous créer le composant ?",
          choices: directories.map(dir => ({
            name: `📁 ${dir}`,
            value: dir
          }))
        }
      ]);
      
      selectedDirectory = directory;
    }
     
    // Demander le nom du composant
    const { componentName } = await inquirer.prompt([
      {
        type: "input",
        name: "componentName",
        message: "Nom du composant (ex: Button, UserCard) :",
        validate: (input) => {
          if (!input.trim()) {
            return "Le nom du composant est requis";
          }
          if (!isValidComponentName(input.trim())) {
            return "Le nom doit commencer par une majuscule et ne contenir que des lettres/chiffres";
          }
          return true;
        }
      }
    ]);
     
    // Construire le chemin selon le mode
    let componentPath;
    let importPath;
    
    switch (mode) {
      case 'ui':
        componentPath = path.join('frontend', 'src', 'components', 'ui', componentName);
        importPath = `import ${componentName} from '@/components/ui/${componentName}';`;
        break;
      case 'specific':
        componentPath = path.join('frontend', 'src', 'components', selectedDirectory, componentName);
        importPath = `import ${componentName} from '@/components/${selectedDirectory}/${componentName}';`;
        break;
      default:
        componentPath = path.join('frontend', 'src', 'components', componentName);
        importPath = `import ${componentName} from '@/components/${componentName}';`;
        break;
    }
           
    try {
      await fs.access(componentPath);
      console.log(error(`❌ Le composant "${componentName}" existe déjà dans "${componentPath}"`));
      return;
    } catch {
      // Le dossier n'existe pas, on peut continuer
    }
     
    // Confirmation
    const { confirm } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: `Créer le composant "${componentName}" dans "${componentPath}" ?`,
        default: true
      }
    ]);
     
    if (confirm) {
      // Passer le répertoire spécifique à la fonction de création
      const modeWithDirectory = mode === 'specific' ? selectedDirectory : mode;
      await createComponent(componentName, modeWithDirectory);
             
      console.log(info('\n💡 Import suggestion :'));
      console.log(`   ${importPath}`);
    } else {
      console.log(info("❌ Création annulée"));
    }
   
  } catch (err) {
    console.log(error(`❌ Erreur : ${err.message}`));
  }
}

// Arrêt propre
process.on("SIGINT", () => {
  console.log(info("\n👋 Au revoir !"));
  process.exit(0);
});

run();