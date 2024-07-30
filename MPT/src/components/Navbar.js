import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; 
import { useAuth } from '../context/AuthContext'; 
import { FaHome, FaChartLine, FaSignInAlt, FaUserPlus, FaExchangeAlt, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
  const { theme, toggleTheme, themeStyles } = useTheme(); 
  const { user, logout } = useAuth(); 
  const [isOpen, setIsOpen] = useState(false); 

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className={`flex items-center justify-between border-b py-6 p-4 ${themeStyles.background} ${themeStyles.text}`}>
      <div className="text-2xl font-bold">
        MPI
      </div>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          {user && (
            <>
              <Link to="/portfolio" className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
                <FaChartLine className="text-xl" />
                <span>Portfolio</span>
              </Link>
              <Link to="/exchange" className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
                <FaExchangeAlt className="text-xl" />
                <span>Exchange</span>
              </Link>
            </>
          )}
          {!user && (
            <>
              <Link to="/login" className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
                <FaSignInAlt className="text-xl" />
                <span>Login</span>
              </Link>
              <Link to="/signup" className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
                <FaUserPlus className="text-xl" />
                <span>Signup</span>
              </Link>
            </>
          )}
          {user && (
            <Link to="/login" onClick={() => { logout(); handleToggle(); }} className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
            <FaSignOutAlt className="text-xl" />
            <span>Logout</span>
          </Link>
          )}
        </div>
        <button onClick={toggleTheme} className="focus:outline-none text-xl">
          {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </button>
        <button onClick={handleToggle} className="lg:hidden text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed h-full top-0 right-0 ${isOpen ? 'block' : 'hidden'} ${theme === 'light' ? 'bg-white' : 'bg-black'} ${themeStyles.text} p-4 md:p-8  md:w-[40%] w-full  transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300 z-50`}
        style={{ 
          backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
          margin: '0 auto' 
        }}
      >
        <button onClick={handleToggle} className="absolute top-4 right-4 text-2xl">
          <FaTimes />
        </button>
        <div className="flex flex-col space-y-8 h-full items-center pt-12">
          <Link to="/" onClick={handleToggle} className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          {user && (
            <>
              <Link to="/portfolio" onClick={handleToggle} className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
                <FaChartLine className="text-xl" />
                <span>Portfolio</span>
              </Link>
              <Link to="/exchange" onClick={handleToggle} className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
                <FaExchangeAlt className="text-xl" />
                <span>Exchange</span>
              </Link>
            </>
          )}
          {!user && (
            <>
              <Link to="/login" onClick={handleToggle} className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
                <FaSignInAlt className="text-xl" />
                <span>Login</span>
              </Link>
              <Link to="/signup" onClick={handleToggle} className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
                <FaUserPlus className="text-xl" />
                <span>Signup</span>
              </Link>
            </>
          )}
          {user && (
            <Link to="/login" onClick={() => { logout(); handleToggle(); }} className={`flex items-center space-x-2 ${themeStyles.text} hover:underline`}>
              <FaSignOutAlt className="text-xl" />
              <span>Logout</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
