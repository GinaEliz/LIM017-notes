import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <Routes> 
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  )
}

export default App