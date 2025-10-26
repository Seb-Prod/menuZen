import './App.css'
import { DeviceProvider } from './context/Device'
import ShowcasePage from './pages/showcase'

function App() {
  const apiUrl = process.env.VITE_API_URL
  console.log("API backend:", apiUrl)

  return (
    <DeviceProvider>
      <ShowcasePage />
    </DeviceProvider>
  )
}

export default App
