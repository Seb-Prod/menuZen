import inquirer from "inquirer";
import { info, error } from "./utils/colors.js";
import { clearConsole } from "./utils/clearConsole.js";
import { askName as askComponentName } from "./utils/askName.js";
import { checkDirectoryExists } from "./utils/checkDirectoryExists.js";
import { createComponent, createUI, createHook } from "./generators/createComponent.js";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function askName(path) {
  let name = await askComponentName();
  while (name && checkDirectoryExists(`${path}${name}`)) {
    console.log(error(`❌ Le composant "${name}" existe déjà !`));
    name = await askComponentName();
  }

  return name || null;
}

async function run() {
  clearConsole();
  console.log(info("⚛️  Générateur de composants React TypeScript"));

  try {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Que voulez-vous générer ?",
        choices: [
          { name: "🧩 Component", value: "component" },
          { name: "🎨 Component UI", value: "ui" },
          { name: "🛠️  Hook", value: "hook" },
          { name: "📄 Page", value: "page" },
          { name: "🚀 Feature", value: "feature" },
          { name: "👋 Quitter", value: "quit" },
        ],
      },
    ]);

    switch (action) {
      case "component": {
        const componentPath = "frontend/src/components/";
        const componentName = await askName(componentPath);
        if (componentName) {
          await createComponent(componentName, componentPath);
        }
        return true;
      }
      case "ui": {
        const uiPath = "frontend/src/components/ui/";
        const componentUiName = await askName(uiPath);
        if (componentUiName) {
          await createUI(componentUiName, uiPath);
        }
        return true;
      }
      case "hook":
        const hookPath = "frontend/src/hooks/";
        const hookName = await askName(hookPath);
        if(hookName){
          await createHook(hookName, hookPath);
        }
        return true;
      case "page":
      case "feature":
        console.log(info("🚧 Fonctionnalité en développement..."));
        return true;
      case "quit":
        console.log(info("\n👋 Au revoir !"));
        return false;
      default:
        console.log(error("❌ Action non reconnue"));
        return true;
    }
  } catch (err) {
    console.log(error(`❌ Erreur : ${err.message}`));
    return true;
  }
}

async function main() {
  while (await run()) {
    console.log(info("Retour au menu..."));
    await wait(500);
  }
}

// Arrêt propre
process.on("SIGINT", () => {
  console.log(info("\n👋 Au revoir !"));
  process.exit(0);
});

main().catch((err) => {
  console.error(error(`❌ Erreur fatale : ${err.message}`));
  process.exit(1);
});
