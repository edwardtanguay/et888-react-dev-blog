import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Portfolio from './pages/Portfolio'
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
