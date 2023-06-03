import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
import Register from '@/pages/Register/Register'
import MealDetails from '@/pages/mealdetails/MealDetails'
import Error from '@/pages/error/Error'
import { useState } from 'react';
import Category from './pages/category/Category'
import Blog from './pages/blog/Blog'

function App() {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);

  // Function to handle user registration
  const handleRegister = () => {
    setIsFirstTimeUser(false);
  };

  return (
    < div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        {isFirstTimeUser ? (
          <Route path="/register" element={<Register />} />
        ) : (
          <Route path="/register" element={<Navigate to="/login" />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path='/meal/:id' element={<MealDetails />} />
        <Route path='/meal/category/:name' element={<Category />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}
export default App
