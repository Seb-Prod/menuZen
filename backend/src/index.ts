import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

// Charge le bon fichier .env en fonction de NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}`
dotenv.config({ path: path.resolve(process.cwd(), envFile) })

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: `Hello from backend in ${process.env.NODE_ENV} mode!`
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
  console.log(`🌍 Loaded environment file: ${envFile}`)
})