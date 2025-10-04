import fs from "fs/promises";
import path from "path";

export async function createFeature(featureName) {
  const featurePath = path.join("frontend", "src", "features", featureName);

  const directories = [
    "components",
    "hooks",
    "services",
    "types",
    "utils",
    "constants",
  ];

  try {
    await fs.mkdir(featurePath, { recursive: true });

    for (const dir of directories) {
      await fs.mkdir(path.join(featurePath, dir), { recursive: true });
    }

    console.log(success(`✅ Feature "${featureName}" créée avec succès !`));
    console.log(info(`📁 Structure créée dans: ${featurePath}`));
    console.log(info("\n📂 Répertoires créés:"));
    directories.forEach((dir) => {
      console.log(`   📁 ${dir}/`);
    });
  } catch (err) {
    throw new Error(`Erreur lors de la création de la feature: ${err.message}`);
  }
}
