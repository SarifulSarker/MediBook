import React, { useContext } from 'react'
import Login from './pages/Login'
import {ToastContainer, toast} from 'react-toastify'
import { AdminContext } from './context/AdminContext.jsx'; // ✅ CORRECT
import Navber from './components/Navber.jsx';

const App = () => {
   const{aToken} = useContext(AdminContext)
  return  aToken ? (
    <div className='bg-[#F8F9FD]'> 
      
       <ToastContainer/>
       <Navber/>
       
       </div>
  ) : (
    <>
     
     <Login/>
       <ToastContainer/>
       </>
  )
}

export default App