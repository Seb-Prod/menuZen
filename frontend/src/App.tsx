import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { DeviceProvider } from './context/Device'
import ShowcasePage from './pages/showcase'
import { ROUTES } from './routes'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const apiUrl = process.env.VITE_API_URL
  console.log("API backend:", apiUrl)

  return (
    <DeviceProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.DOCUMENTATION} element={<ShowcasePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DeviceProvider>
  )
}

export default App
