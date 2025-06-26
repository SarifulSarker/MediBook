import React, { useContext } from 'react'
import Login from './pages/Login'
import {ToastContainer, toast} from 'react-toastify'
import { AdminContext } from './context/AdminContext.jsx'; // ✅ CORRECT
import Navber from './components/Navber.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllApointments from './pages/Admin/AllApointments.jsx';
import AddDoctor from './pages/Admin/AddDoctor.jsx';
import DoctorList from './pages/Admin/DoctorList.jsx';

const App = () => {
   const{aToken} = useContext(AdminContext)
  return  aToken ? (
    <div className='bg-[#F8F9FD]'> 
      
       <ToastContainer/>
       <Navber/>
      <div className='flex items-start'>
         <Sidebar/>
         <Routes>
           <Route path='/' element = {<></>} />
          <Route path='/admin-dashboard' element = {<Dashboard/>} />
          <Route path='/all-appointments' element = {<AllApointments/>} />
          <Route path='/add-doctor' element = {<AddDoctor/>} />
          <Route path='/doctor-list' element = {<DoctorList/>} />
         </Routes>
      </div>
       </div>
  ) : (
    <>
     
     <Login/>
       <ToastContainer/>
       </>
  )
}

export default App