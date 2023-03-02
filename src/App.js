import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Forms from './modules/Forms';
import Nav from './modules/Nav';
import Footer from './modules/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Nav />
      {/* <BrowserRouter>
      <Routes>
          <header className="App-header">
            <Route path="" element={<Forms />} />
            <Route path="form" element={<Forms />} />
            <Route path="users" element={<Forms />} />
      </header>
          
        </Routes>
      </BrowserRouter> */}
      <Forms/>
      <Footer />
    </div>
  );
}

export default App;
