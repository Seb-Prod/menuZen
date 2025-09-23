#!/usr/bin/env node
import inquirer from 'inquirer'
import { openVSCode, openBrowser, clearConsole, printHeader } from './utils/index.js'
import { startServers, backendProcess, frontendProcess, actualBackendPort, actualFrontendPort, cleanup } from './utils/serverManager.js';
import { info } from '../utils/colors.js'

let debugMode = false; // Variable globale pour stocker le mode

// ========================
// Menu interactif
// ========================
async function mainMenu() {
  printHeader(actualFrontendPort, actualBackendPort)

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Que veux-tu faire ?',
      choices: [
        { name: `➡️ Basculer le mode d'affichage (${debugMode ? 'Debug ON' : 'Normal'})`, value: 't' },
        { name: '🔄 Relancer les serveurs', value: 'r' },
        { name: '📝 Ouvrir VS Code', value: 'c' },
        { name: '🌍 Ouvrir le navigateur', value: 'o' },
        { name: '🧹 Nettoyer la console', value: 'x' },
        { name: '❌ Quitter', value: 'q' }
      ]
    }
  ])

  switch (action) {
    case 't':
      debugMode = !debugMode; // Inverse l'état
      console.log(info(`➡️ Mode d'affichage basculé sur ${debugMode ? 'Debug' : 'Normal'}.`));
      setTimeout(() => mainMenu(), 500);
      return;
    case 'r':
      clearConsole()
      console.log('🔄 Relancement des serveurs...')
      try {
        await startServers(debugMode) // Passez le mode de débogage ici
        console.log('🔄 Relancement terminé, retour au menu...')
        mainMenu()
      } catch (error) {
        console.error('❌ Erreur lors du lancement:', error.message)
        setTimeout(() => mainMenu(), 2000)
      }
      return
    case 'c':
      openVSCode()
      setTimeout(() => mainMenu(), 500)
      return
    case 'o':
      await openBrowser(actualFrontendPort)
      setTimeout(() => mainMenu(), 500)
      clearConsole()
      return
    case 'x':
      clearConsole()
      setTimeout(() => mainMenu(), 500)
      return
    case 'q':
      cleanup()
      console.log('👋 Arrêt des serveurs...')
      if (backendProcess) backendProcess.kill('SIGTERM')
      if (frontendProcess) frontendProcess.kill('SIGTERM')
      process.exit(0)
  }
}

// ========================
// Lancement principal
// ========================
async function run() {
  clearConsole()
  console.log(info('🚀 Lancement des serveurs...'))
  
  // Menu pour choisir le mode de lancement initial
  const { mode } = await inquirer.prompt([
    {
      type: 'list',
      name: 'mode',
      message: 'Quel mode de lancement souhaitez-vous ?',
      choices: [
        { name: 'Normal (sorties limitées)', value: 'normal' },
        { name: 'Debug (toutes les sorties)', value: 'debug' }
      ]
    }
  ]);

  debugMode = (mode === 'debug'); // Définissez la variable globale

  try {
    await startServers(debugMode) // Passez le mode de débogage initial
    mainMenu()
  } catch (error) {
    console.error('❌ Erreur lors du lancement:', error.message)
    console.log('💡 Vérifiez que les dossiers frontend et backend existent et contiennent un package.json')
    process.exit(1)
  }
}

// Arrêt propre
process.on('SIGINT', () => {
  console.log('\n👋 Arrêt des serveurs...')
  if (backendProcess) backendProcess.kill('SIGTERM')
  if (frontendProcess) frontendProcess.kill('SIGTERM')
  process.exit(0)
})

run()