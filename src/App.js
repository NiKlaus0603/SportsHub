import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Football from './components/pages/Football';
import Basketball from './components/pages/Basketball';
import Cricket from './components/pages/Cricket';
import Baseball from './components/pages/Baseball';
import Formula1 from './components/pages/Formula1';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Football'  element={<Football/>} />
          <Route path='/Basketball'  element={<Basketball/>} />
          <Route path='/Cricket'  element={<Cricket/>} />
          <Route path='/Baseball'  element={<Baseball/>} />
          <Route path='/Formula1'  element={<Formula1/>} />
          </Routes>
      </Router>
    </>
  );
}
export default App;