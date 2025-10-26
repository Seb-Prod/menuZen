import { spawn } from 'child_process'
import dotenv from 'dotenv'
import path from 'path'
import { backend, frontend, success, error, info } from '../../utils/colors.js'
import os from 'os'

// Fonction pour récupérer l’adresse IP locale (Wi-Fi / LAN)
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return 'localhost'
}

const localIp = getLocalIpAddress()

let backendProcess = null
let frontendProcess = null

// Chargement explicite des variables d'environnement
const frontendEnv = dotenv.config({ path: path.resolve('frontend/.env.development') }).parsed || {}
const backendEnv = dotenv.config({ path: path.resolve('backend/.env.development') }).parsed || {}

let actualBackendPort = backendEnv.PORT || 5000
let actualFrontendPort = frontendEnv.PORT || 5173

// Fonction pour vider la console
function clearConsole() {
  process.stdout.write('\x1b[2J\x1b[0f')
}

function startServers(debugMode) {
  return new Promise((resolve, reject) => {
    // Nettoyage d'éventuels anciens processus
    if (backendProcess) {
      backendProcess.removeAllListeners()
      backendProcess.kill('SIGTERM')
      backendProcess = null
    }
    if (frontendProcess) {
      frontendProcess.removeAllListeners()
      frontendProcess.kill('SIGTERM')
      frontendProcess = null
    }

    let backendReady = false

    // Backend
    console.log(backend('__ Démarrage du backend... __'))

    backendProcess = spawn(
      'npm',
      ['run', 'dev', '--prefix', 'backend'],
      {
        shell: true,
        env: {
          ...process.env,
          NODE_ENV: 'development',
          PORT: actualBackendPort,
        },
      }
    )

    if (debugMode) {
      backendProcess.stdout.on('data', (data) => {
        const msg = data.toString()
        process.stdout.write(backend('⚙️  BACK │ ') + msg)
      })

      backendProcess.stderr.on('data', (data) => {
        const msg = data.toString()
        process.stderr.write(backend('⚙️ BACK │ ') + error('ERROR: ') + msg)
      })
    }

    // Gestion de la logique de démarrage (visible dans les deux modes)
    backendProcess.stdout.on('data', (data) => {
      const msg = data.toString()
      const portMatch = msg.match(/localhost:(\d+)/)
      if (portMatch) actualBackendPort = portMatch[1]

      if (!backendReady && (msg.toLowerCase().includes('server running') || msg.toLowerCase().includes('listening on'))) {
        backendReady = true
        console.log(success('__ ✅ Backend prêt! __'))
        console.log('\n')
        startFrontend(debugMode).then(resolve).catch(reject)
      }
    })

    backendProcess.stderr.on('data', (data) => {
      const msg = data.toString()
      if (msg.toLowerCase().includes('error') && !msg.toLowerCase().includes('warning')) {
        reject(new Error(`Backend error: ${msg}`))
      }
    })

    backendProcess.on('error', (err) => reject(new Error(`Backend process error: ${err.message}`)))

    setTimeout(() => {
      if (!backendReady) reject(new Error('Backend timeout - le serveur met trop de temps à démarrer'))
    }, 50000)
  })
}

function startFrontend(debugMode) {
  return new Promise((resolve, reject) => {
    let frontendReady = false

    console.log(frontend('🖥️  Démarrage du frontend...'))
    frontendProcess = spawn(
      'npm',
      ['run', 'dev', '--prefix', 'frontend'],
      {
        shell: true,
        env: {
          ...process.env,
          NODE_ENV: 'development',
          PORT: actualFrontendPort,
        },
      }
    )

    if (debugMode) {
      frontendProcess.stdout.on('data', (data) => {
        const msg = data.toString()
        process.stdout.write(frontend('🖥️ FRONT│ ') + msg)
      })

      frontendProcess.stderr.on('data', (data) => {
        const msg = data.toString()
        process.stderr.write(frontend('🖥️ FRONT│ ') + error('ERROR: ') + msg)
      })
    }

    // Gestion de la logique de démarrage (visible dans les deux modes)
    frontendProcess.stdout.on('data', (data) => {
      const msg = data.toString()
      const portMatch = msg.match(/localhost:(\d+)/)
      if (portMatch) actualFrontendPort = portMatch[1]

      if (!frontendReady && (msg.toLowerCase().includes('ready') || msg.toLowerCase().includes('local:'))) {
        frontendReady = true
        console.log(success('✅ Frontend prêt!'))
        console.log(success('🎉 Tous les serveurs sont lancés!\n'))

        console.log(info('📋 Résumé des serveurs:'))
        console.log(backend(`   ⚙️  Backend:  http://localhost:${actualBackendPort}`))
        console.log(frontend(`   🖥️  Frontend: http://localhost:${actualFrontendPort}`))
        console.log('')
        console.log(frontend(`   📱  Frontend (iPhone): http://${localIp}:${actualFrontendPort}`))

        // Vider la console après un démarrage réussi
        setTimeout(() => {
          clearConsole()
          // Réafficher seulement le résumé final après nettoyage
          console.log(success('🎉 Serveurs démarrés avec succès!\n'))
          console.log(info('📋 Serveurs actifs:'))
          console.log(backend(`   ⚙️  Backend:  http://localhost:${actualBackendPort}`))
          console.log(frontend(`   🖥️  Frontend: http://localhost:${actualFrontendPort}`))
          console.log(frontend(`   📱  Frontend (iPhone): http://${localIp}:${actualFrontendPort}`))
          console.log('\n' + info('💡 Appuyez sur Ctrl+C pour arrêter les serveurs'))
          resolve()
        }, 500) // Petit délai pour s'assurer que tout est bien démarré
      }
    })

    frontendProcess.stderr.on('data', (data) => {
      const msg = data.toString()
      if (msg.toLowerCase().includes('error') && !msg.toLowerCase().includes('warning')) {
        reject(new Error(`Frontend error: ${msg}`))
      }
    })

    frontendProcess.on('error', (err) => reject(new Error(`Frontend process error: ${err.message}`)))
  })
}

function cleanup() {
  console.log(info('\n🧹 Nettoyage des processus...'))

  if (backendProcess) {
    console.log(backend('🛑 Arrêt du backend...'))
    backendProcess.kill('SIGTERM')
    backendProcess = null
  }

  if (frontendProcess) {
    console.log(frontend('🛑 Arrêt du frontend...'))
    frontendProcess.kill('SIGTERM')
    frontendProcess = null
  }

  console.log(success('✅ Processus nettoyés!'))
  process.exit(0)
}

// Gestion propre de la fermeture
process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)

export {
  startServers,
  startFrontend,
  backendProcess,
  frontendProcess,
  actualBackendPort,
  actualFrontendPort,
  cleanup,
  clearConsole // Export de la fonction de nettoyage si besoin ailleurs
}