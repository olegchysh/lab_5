import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Education from './components/Education';
import Skills from './components/Skills';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Автоматичне перемикання теми (07:00 - 21:00)
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      
      <button 
        onClick={toggleTheme} 
        className="fixed top-5 right-5 z-[1001] px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        Змінити тему (Зараз: {theme})
      </button>
      
      <Header />
      
      <main className="container mx-auto px-4 py-10">
        <Education />
        <Skills />
        <Reviews />
      </main>

      <Footer />
      
      <ContactForm />
    </div>
  );
}