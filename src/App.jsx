import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import ToolLayout from './components/ToolLayout'
    import { Toaster } from 'react-hot-toast'
    import './App.css'

    function App() {
      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tools/:toolId" element={<ToolLayout />} />
            </Routes>
          </BrowserRouter>
          <Toaster position="bottom-right" />
        </>
      )
    }

    export default App
