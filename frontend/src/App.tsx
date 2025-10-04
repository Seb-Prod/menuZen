import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spinner from './components/ui/Spinner'

function App() {
  const [count, setCount] = useState(0)
  const apiUrl = process.env.VITE_API_URL
  console.log("API backend:", apiUrl)

  return (
    <>
      
    </>
  )
}

export default App
