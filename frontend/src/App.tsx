import './App.css'
import Spinner from './components/ui/Spinner'

function App() {
  const apiUrl = process.env.VITE_API_URL
  console.log("API backend:", apiUrl)

  return (
    <>
      <Spinner/>
    </>
  )
}

export default App
