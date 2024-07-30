import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Toaster, toast } from 'react-hot-toast';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { themeStyles } = useTheme();
  const { login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      login(username, password); // This would simulate the signup and immediate login
      toast.success('Signup successful!');
      window.location.href = '/portfolio';
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    }
  };

  return (
    <div className={`flex items-center justify-center h-[90vh] mx-auto w-[100%] ${themeStyles.background} ${themeStyles.text}`}>
      <div className={`px-8 md:px-16 py-16 mx-4 flex flex-col gap-7 shadow-login w-[90%] md:w-[50%] lg:w-[40%] ${themeStyles.border}`}>
        <h2 className='font-semibold text-4xl my-8 text-center'>Signup</h2>
        <form onSubmit={handleSignup} className='flex flex-col justify-center'>
          <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center'>
            <label>Username:</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`border border-b-4 w-[100%] p-3 rounded ${themeStyles.background} ${themeStyles.text}`}
              required
            />
          </div>

          <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center'>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border border-b-4 w-[100%] p-3 rounded ${themeStyles.background} ${themeStyles.text}`}
              required
            />
          </div>
          <div className='w-[100%] mb-6 flex flex-col gap-3 justify-center'>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`border border-b-4 w-[100%] p-3 rounded ${themeStyles.background} ${themeStyles.text}`}
              required
            />
          </div>
          <button type="submit" className={`border py-2 px-4 mt-6 rounded-md ${themeStyles.background} transition hover:bg-slate-500`}>
            Signup
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Signup;
