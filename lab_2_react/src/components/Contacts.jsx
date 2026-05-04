import React from 'react';

const Contacts = () => {
  return (
    <section id="contacts" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Контакти</h2>
        <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-semibold mr-2">Телефон:</span>
              <a href="tel:0961959798" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                096 195 97 98
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Адреса:</span>
              <span>м. Львів</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;