import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
import Register from '@/pages/Register/Register'
import { useState } from 'react';

function App() {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);

  // Function to handle user registration
  const handleRegister = () => {
    setIsFirstTimeUser(false);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {isFirstTimeUser ? (
        <Route path="/register" element={<Register />} />
      ) : (
        <Route path="/register" element={<Navigate to="/login" />} />
      )}
      <Route path="/login" element={<Login />} />
    </Routes>



  )
}

export default App
