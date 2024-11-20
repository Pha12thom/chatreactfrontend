import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Chat from './pages/chat';
import Register from './pages/register';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
