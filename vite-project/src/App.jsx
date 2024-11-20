import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Chat from './pages/chat'
import Register from './pages/register'
import Login from './pages/login'


function App() {
  return (
    <>
      
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/chat" />} />

    </>
  )
}

export default App
