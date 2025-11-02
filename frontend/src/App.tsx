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
          <Route path={ROUTES.HOME} element={<ShowcasePage />} />
          <Route path={ROUTES.MENU} element={<NotFound />} />
          <Route path="*" element={<ShowcasePage />} />
        </Routes>
      </BrowserRouter>
    </DeviceProvider>
  )
}

export default App
