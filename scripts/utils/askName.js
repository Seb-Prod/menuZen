import inquirer from "inquirer";
import { isValidComponentName } from "./validation.js";

export async function askName() {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Quel est le nom ?",
      validate: (input) => {
        if (input.trim() === "") {
          return true;
        }
        if (!isValidComponentName(input.trim())) {
          return "Le nom doit commencer par une majuscule et ne contenir que des lettres/chiffres";
        }
        return true;
      },
    },
  ]);
  return name.trim();
}
