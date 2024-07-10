import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FormControl, FormLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert('Login successful!');
      window.location.href = '/portfolio';
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  console.log(email)
  return (
    <div className='flex container items-center justify-center h-[90vh] mx-auto w-[100%]'>
      <div className="border rounded px-8 md:px-16 py-16 mx-4 flex flex-col gap-7 shadow-login w-[90%] md:w-[50%] lg:w-[40%]">
        <h2 className='font-semibold text-4xl my-8 text-center'>Login</h2>
        <FormControl onSubmit={handleLogin} className='flex flex-col justify-center'>
          <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center '>
            <FormLabel className=''>Email: </FormLabel>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border border-b-4 w-[100%] p-3 rounded'
            />
          </div>
          <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center '>
            <FormLabel className=''>Password: </FormLabel>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border border-b-4 w-[100%] p-3 rounded'
            />
            <button type="submit" className='border py-2 px-4 mt-6 rounded-md bg-slate-300 transition hover:bg-slate-500'>Login</button>
          </div>
        <Link href="/signup">
          <p className="mt-[-10px]">
            Don’t have an account?{" "}
            <span className="font-bold text-grey-300]">
              Create one
            </span>
          </p>
        </Link>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
