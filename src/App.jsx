import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100">
        <Header/> {/* Header added here */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/read/:id" element={<Read />} />
          </Routes>
        </div>
        <Footer /> {/* Footer added here */}
      </div>
    </BrowserRouter>
  );
}

export default App;