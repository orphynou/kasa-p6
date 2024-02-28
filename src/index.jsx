import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Error from './pages/Error'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/a-propos" element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
