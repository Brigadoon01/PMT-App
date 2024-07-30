import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Adjust path as needed
import { Toaster, toast } from 'react-hot-toast';

const Exchange = () => {
  const { theme, themeStyles } = useTheme(); // Access current theme
  const [action, setAction] = useState('buy');
  const [metal, setMetal] = useState('gold');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle buy/sell logic here
    toast.success(`Successfully ${action === 'buy' ? 'bought' : 'sold'} ${quantity} oz of ${metal}.`);
;
  };

  return (
    <div className={`min-h-screen p-8 ${themeStyles.background} ${themeStyles.text}`}>
      <h1 className="text-4xl font-bold text-center mb-8">Exchange Metals</h1>
      <form onSubmit={handleSubmit} className={`max-w-lg mx-auto border shadow-lg rounded-lg p-8 ${themeStyles.background} ${themeStyles.text}`}>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Action</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className={`w-full border border-gray-300 rounded-md p-2 ${themeStyles.background} ${themeStyles.text}`}
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Select Metal</label>
          <select
            value={metal}
            onChange={(e) => setMetal(e.target.value)}
            className={`w-full border border-gray-300 rounded-md p-2 ${themeStyles.background} ${themeStyles.text}`}
          >
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="platinum">Platinum</option>
            <option value="palladium">Palladium</option>
            <option value="copper">Copper</option>
            <option value="aluminum">Aluminum</option>
            <option value="zinc">Zinc</option>
            <option value="nickel">Nickel</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Quantity (oz)</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={`border w-full border-gray-300 rounded-md p-2 ${themeStyles.background} ${themeStyles.text}`}
            min="0"
          />
        </div>
        <button
          type="submit"
          className={`bg-${theme} px-6 py-3 border rounded-lg shadow-lg hover:bg-blue-600 transition ${themeStyles.text} ${themeStyles.background}`}
        >
          {action.charAt(0).toUpperCase() + action.slice(1)}
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Exchange;
