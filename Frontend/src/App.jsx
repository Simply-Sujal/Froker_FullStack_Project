import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import DiscoverFroker from './Pages/DiscoverFroker'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/discoverfroker' element={<DiscoverFroker />} />
      </Routes>
    </Router>
  )
}

export default App