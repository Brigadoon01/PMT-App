import React, { useState } from 'react';
import axios from 'axios';
import { FormLabel,FormControl } from '@mui/material';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      alert('Signup successful!');
      // Redirect to login
      window.location.href = '/login';
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div className='flex container items-center justify-center h-[90vh] mx-auto w-[100%]'>
      <div className="border px-8 md:px-16 py-16 mx-4 flex flex-col gap-7 shadow-login w-[90%] md:w-[50%] lg:w-[40%]">
        <h2 className='font-semibold text-4xl my-8 text-center'>Signup</h2>
        <FormControl onSubmit={handleSignup} className='flex flex-col justify-center '>
        <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center '>
            <FormLabel>Username: </FormLabel>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='border border-b-4 w-[100%] p-3 bg-slate-300'
              required
            />
          </div>

          <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center '>
            <FormLabel>Email: </FormLabel>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border border-b-4 w-[100%] p-3 bg-slate-300'
              required
            />
          </div>
          <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center' >

            <FormLabel>
              Password:
            </FormLabel>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border border-b-4 w-[100%] p-3 bg-slate-300'
              required
            />
          </div>
          <button type="submit" className='border py-2 px-4 mt-6 rounded-md bg-slate-300 transition hover:bg-slate-500'>Signup</button>
        </FormControl>
      </div>
    </div>
  );
};

export default Signup;
