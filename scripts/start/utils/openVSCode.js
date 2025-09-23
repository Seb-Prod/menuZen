import { exec } from 'child_process';

export function openVSCode() {
  exec('code .', (err) => {
    if (err) console.log("⚠️ Impossible d'ouvrir VS Code. Vérifie que la commande `code` est installée.")
  })
}
