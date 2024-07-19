// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import DiscoverFroker from './Pages/DiscoverFroker';
import NewBlog from './components/NewBlog';
import BlogDetails from './Pages/BlogDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/discoverfroker' element={<DiscoverFroker />} />
        <Route path='/newblogpost' element={<NewBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
