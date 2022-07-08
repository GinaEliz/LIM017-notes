import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Note } from './pages/Note';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/note" element={<Note/>} />

    </Routes>
  )
}

export default App