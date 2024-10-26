import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import MainLayout from './components/pages/MainLayout'
import BlogPage from './components/pages/BlogPage'



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blogs" element={<BlogPage/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
