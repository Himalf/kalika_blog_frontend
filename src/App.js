import React from 'react'
import './App.css';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Singleblog from './components/Singleblog/Singleblog';
function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/singleblog/:id' element={<Singleblog />} />
          </Routes>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
