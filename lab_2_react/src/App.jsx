import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Education from './components/Education';
import Skills from './components/Skills';
import Contacts from './components/Contacts';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Автоматичне перемикання теми залежно від часу [cite: 154]
    const hours = new Date().getHours();
    // Денна тема: від 07:00 до 21:00 [cite: 155]
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Функція для ручного перемикання [cite: 156]
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // Застосовуємо клас теми до головного контейнера [cite: 157]
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      <button 
        onClick={toggleTheme} 
        className="fixed top-5 right-5 z-[1001] px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        Змінити тему (Зараз: {theme})
      </button>
      
      <Header />
      
      <main className="container mx-auto px-4">
        <Education />
        <Skills />
        <Contacts />
        {/* Компонент відгуків для 19-го варіанту [cite: 135] */}
        <Reviews />
      </main>

      <Footer />
      
      {/* Модальне вікно з'явиться через 1 хв [cite: 144] */}
      <ContactForm />
    </div>
  );
}