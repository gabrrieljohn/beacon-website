import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnimatedBackground from './components/AnimatedBackground'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}
