import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Home from './pages/Home/home.jsx'
import About from './pages/About/about.jsx'
import Fiches from './pages/Fiches/fiches.jsx'
import Error from './pages/Error/error.jsx'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiches/:id" element={<Fiches />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
