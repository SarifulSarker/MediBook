import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const {backendUrl, token, setToken} = useContext(AppContext)

  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate()
  const onSubmitHandler = async (e) => {
    e.preventDefault();
   
     try {
       if(state === 'Sign Up'){
         const {data} = await axios.post(backendUrl+'/api/user/register',{
          name,password,email
         })

         if(data.success){
          localStorage.setItem('token', data.token)
          setToken(data.token)
          
         }else{
          toast.error(data.message)
         }
       } else{
        // login
          const {data} = await axios.post(backendUrl+'/api/user/login',{
         password,email
         })

         if(data.success){
          localStorage.setItem('token', data.token)
          setToken(data.token)
          
         }else{
          toast.error(data.message)
         }
       }  

     } catch (error) {
      toast.error(error.message)

     }
  };


  useEffect(()=>{
    if(token){
     navigate('/')
    }
  },[token])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center justify-center px-4"
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-zinc-200 rounded-xl shadow-md bg-white">
        <p className="text-2xl font-semibold">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p className="text-sm text-gray-600">
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment
        </p>

        {state === 'Sign Up' && (
          <div className="w-full">
            <p className="mb-1">Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="w-full">
          <p className="mb-1">Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full">
          <p className="mb-1">Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md text-base mt-3 hover:opacity-90 transition"
        >
          {state}
        </button>

        <p className="text-sm mt-3 text-gray-600">
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
            className="text-primary cursor-pointer font-medium"
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
