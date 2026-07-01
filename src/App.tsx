import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { Header } from './components/layout/Header'
import { GlobalFooter } from './components/layout/GlobalFooter'
import { Home } from './pages/Home'
import { Methodology } from './pages/Methodology'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <GlobalFooter />
    </BrowserRouter>
  )
}

export default App
