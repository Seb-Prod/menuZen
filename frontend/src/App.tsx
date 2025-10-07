import './App.css'
import ShowcasePage from './pages/showcase'

function App() {
  const apiUrl = process.env.VITE_API_URL
  console.log("API backend:", apiUrl)

  return (
    <>
     <ShowcasePage/>
    </>
  )
}

export default App
