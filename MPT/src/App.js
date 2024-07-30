import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Login from './components/Login';
import Signup from './components/Signup';
import Exchange from './components/Exchange';
import Navbar from './components/Navbar';
import ErrorBoundary from './utils/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/exchange" element={<Exchange />} />
          </Routes>
        </main>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
