import './App.css'
import Spinner from './components/ui/Spinner'

function App() {
  const apiUrl = process.env.VITE_API_URL
  console.log("API backend:", apiUrl)

  return (
    <>
      <Spinner variant='neutral'></Spinner>
    </>
  )
}

export default App
