import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; 
import { FaRegGem, FaChartLine, FaDatabase, FaUser } from 'react-icons/fa'; 
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const { themeStyles } = useTheme();
  return (
    <div className={`p-6 rounded-lg shadow-lg transform ease-in mb-4 ${isOpen && themeStyles.background}`}>
      <div className='flex flex-row justify-between items-center '>
      <h3 className={`text-xl font-semibold cursor-pointer ${themeStyles.text}`} onClick={onClick}>{question}</h3>
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && <p className={`${themeStyles.text}  mt-4`}>{answer}</p>}
    </div>
  );
};

const Home = () => {
  const { theme, themeStyles } = useTheme(); 
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I sign up?',
      answer: 'Click on the "Sign Up" button at the top right of the page and fill in the required details to create an account.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use high-level encryption and follow strict privacy policies to ensure your data is secure.',
    },
    {
      question: 'Can I customize alerts?',
      answer: 'Yes, you can set up customizable alerts to stay informed about market changes and your portfolio performance.',
    },
    {
      question: 'What is the cost of using this platform?',
      answer: 'We offer both free and premium plans. Check our pricing page for detailed information on the features included in each plan.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team through the contact form at the bottom of this page or by emailing support@metalportfolio.com.',
    },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-8 bg-cover bg-center`}>
      {/* Header Section */}
      <header className="text-center mb-12 py-20 bg-opacity-50 rounded-lg" style={{ backgroundColor: theme === 'dark' ? '#1a202c' : '#ffffff' }}>
        <h1 className={`text-5xl font-bold mb-4 ${themeStyles.text} shadow-lg p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>Welcome to Metal Portfolio Insights</h1>
        <p className={`text-xl ${themeStyles.text} max-w-4xl mx-auto`}>
          Discover and manage your precious metals portfolio with real-time data, historical analysis, and more. Whether you are an investor or enthusiast, we offer the tools and insights you need.
        </p>
      </header>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className={`text-4xl font-semibold mb-6 text-center ${themeStyles.text}`}>Our Business Model</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <FaRegGem className={`text-4xl mb-4 ${themeStyles.text}`} />
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>Real-time Metal Prices</h3>
            <p className={`${themeStyles.text}`}>Stay updated with the latest prices of precious metals in real-time.</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <FaChartLine className={`text-4xl mb-4 ${themeStyles.text}`} />
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>Comprehensive Historical Data</h3>
            <p className={`${themeStyles.text}`}>Access detailed historical data to analyze trends and make informed decisions.</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <FaDatabase className={`text-4xl mb-4 ${themeStyles.text}`} />
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>Secure Data Storage</h3>
            <p className={`${themeStyles.text}`}>Your data is stored securely with high-level encryption and privacy protection.</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <FaUser className={`text-4xl mb-4 ${themeStyles.text}`} />
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>User-Friendly Interface</h3>
            <p className={`${themeStyles.text}`}>Enjoy an intuitive and easy-to-navigate platform for managing your portfolio.</p>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="mb-12">
        <h2 className={`text-4xl font-semibold mb-6 text-center ${themeStyles.text}`}>Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>Advanced Analytics</h3>
            <p className={`${themeStyles.text}`}>Utilize our advanced analytical tools to forecast market trends and make data-driven investment decisions.</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>Expert Insights</h3>
            <p className={`${themeStyles.text}`}>Gain access to expert insights and recommendations from industry professionals.</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>Customizable Alerts</h3>
            <p className={`${themeStyles.text}`}>Set up customizable alerts to stay informed about market changes and your portfolio performance.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className={`text-4xl font-semibold mb-6 text-center ${themeStyles.text}`}>What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <p className={`${themeStyles.text} mb-4`}>"This platform has transformed the way I manage my metals portfolio. The real-time data is incredibly accurate and helpful." - Alex R.</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <p className={`${themeStyles.text} mb-4`}>"I love the historical analysis feature. It gives me all the information I need to make informed investment decisions." - Sarah M.</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <p className={`${themeStyles.text} mb-4`}>"The user interface is very intuitive and easy to navigate. Highly recommend!" - David K.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className={`text-4xl font-semibold mb-6 text-center ${themeStyles.text}`}>Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className={`text-4xl font-semibold mb-6 text-center ${themeStyles.text}`}>Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <img src="" alt="Team Member 1" className="w-32 h-32 rounded-full mb-4" />
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>John Doe</h3>
            <p className={`${themeStyles.text}`}>CEO</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <img src="" alt="Team Member 2" className="w-32 h-32 rounded-full mb-4" />
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>Jane Smith</h3>
            <p className={`${themeStyles.text}`}>CTO</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <img src="" alt="Team Member 3" className="w-32 h-32 rounded-full mb-4" />
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>Michael Johnson</h3>
            <p className={`${themeStyles.text}`}>Head of Analytics</p>
          </div>
          <div className={`flex flex-col items-center p-6 text-center rounded-lg shadow-lg ${themeStyles.background}`}>
            <img src="" alt="Team Member 4" className="w-32 h-32 rounded-full mb-4" />
            <h3 className={`text-xl font-semibold ${themeStyles.text}`}>Emily Davis</h3>
            <p className={`${themeStyles.text}`}>Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-12">
        <h2 className={`text-4xl font-semibold mb-6 text-center ${themeStyles.text}`}>Contact Us</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-lg font-semibold mb-2 ${themeStyles.text}`}>Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 rounded-lg shadow-lg border border-gray-300" required />
            </div>
            <div>
              <label htmlFor="email" className={`block text-lg font-semibold mb-2 ${themeStyles.text}`}>Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 rounded-lg shadow-lg border border-gray-300" required />
            </div>
            <div>
              <label htmlFor="message" className={`block text-lg font-semibold mb-2 ${themeStyles.text}`}>Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-3 rounded-lg shadow-lg border border-gray-300" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 transition">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;

