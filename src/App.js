import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import News from './Components/News';
import { Toaster } from 'react-hot-toast';

function App() {
  const pageSize = 15;

  return (
    <div className=' min-h-[100vh] relative flex h-auto bg-darkBg'>
      <Router>
        <Navbar />

        <Routes>

          <Route path='/' element={<News key="general" pageSize={pageSize} country="in" category="general" />}/>
          <Route path='/business' element={<News key="business" pageSize={pageSize} country="in" category="business"  />} />
          <Route path='/entertainment' element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path='/health' element={<News key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path='/science' element={<News key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path='/sports' element={<News key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path='/technology' element={<News key="technology" pageSize={pageSize} country="in" category="technology" />} />

        </Routes>

      </Router>
      <Toaster />
    </div>
  );
}

export default App;
