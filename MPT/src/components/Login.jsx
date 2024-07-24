import React, { useState } from 'react';
import { FormControl, FormLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // Adjust the path as needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { themeStyles } = useTheme(); // Use the theme context

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // await login(email, password);
      alert('Login successful!');
      window.location.href = '/portfolio';
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className={`flex  items-center justify-center h-[90vh] mx-auto w-[100%] ${themeStyles.background} ${themeStyles.text}`}>
      <div className={`border rounded px-8 md:px-16 py-16 mx-4 flex flex-col gap-7 shadow-login w-[90%] md:w-[50%] lg:w-[40%] ${themeStyles.border}`}>
        <h2 className='font-semibold text-4xl my-8 text-center'>Login</h2>
        <FormControl onSubmit={handleLogin} className='flex flex-col justify-center'>
          <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center '>
            <label className="${themeStyles.background} ${themeStyles.text}">Email: </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border border-b-4 w-[100%] p-3 rounded ${themeStyles.background} ${themeStyles.text}`}
            />
          </div>
          <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center '>
            <label className="${themeStyles.background} ${themeStyles.text}">Password: </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`border border-b-4 w-[100%] p-3 rounded ${themeStyles.background} ${themeStyles.text}`}
            />
            <button onClick={handleLogin} type="submit" className={`border py-2 px-4 mt-6 rounded-md ${themeStyles.background} transition hover:bg-slate-500`}>
              Login
            </button>
          </div>
          <p className="mt-[-10px]">
            Don’t have an account?{' '}
            <Link to="/signup">
              <span className="font-bold text-grey-300 hover:underline">
                Create one
              </span>
            </Link>
          </p>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
