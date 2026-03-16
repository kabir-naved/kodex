import { useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx';

function App() {
 const [isLogin, setIsLogin] = useState(true);

 function toggleForm() {
   setIsLogin(!isLogin);
 }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F8FB]">
      <div className="bg-white w-[440px] p-10 rounded-2xl shadow-lg">
        {isLogin ? (
          <Login toggle={toggleForm} />
        ) : (
          <Register toggle={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default App
