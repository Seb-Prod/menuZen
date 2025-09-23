import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

// Charge le bon fichier .env en fonction de NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`
dotenv.config({ path: path.resolve(process.cwd(), envFile) })

const app = express()
app.use(express.json())

// Middleware de debug pour voir les requêtes
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`)
  next()
})

// Route principale avec plus de debug
app.get('/', (req, res) => {
  console.log('🏠 Route / appelée')
  const message = `<h1>Hello from backend in ${process.env.NODE_ENV || 'development'} mode!</h1>
                   <p>Time: ${new Date().toLocaleString()}</p>
                   <p>Port: ${process.env.PORT || 5000}</p>`
  console.log('📤 Envoi de la réponses')
  res.send(message)
})

// Route de test supplémentaire
app.get('/test', (req, res) => {
  console.log('🧪 Route /test appelée')
  res.json({ message: 'Test OK', timestamp: new Date().toISOString() })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
})