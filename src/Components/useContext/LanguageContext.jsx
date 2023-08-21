import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ru'); 


  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('lang', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;