import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [systemData, setSystemData] = useState({ os: '', browser: '' });

  useEffect(() => {
    // 1. Зчитуємо дані про систему та браузер
    const info = {
      os: navigator.platform,
      browser: navigator.userAgent
    };
    
    // 2. Зберігаємо ці дані в localStorage
    localStorage.setItem('systemInfo', JSON.stringify(info));
    
    // 3. Оновлюємо стан, щоб вивести на екран
    setSystemData(info);
  }, []);

  return (
    <footer style={footerStyle}>
      <p>© 2026 Stepan — Лабораторна робота №4</p>
      
      <div style={contactStyle}>
        <p><strong>Телефон:</strong> <a href="tel:0961959798" style={linkStyle}>096 195 97 98</a></p>
        <p><strong>Адреса:</strong> м. Львів</p>
      </div>

      {/* Відображення інформації з localStorage */}
      <div style={infoStyle}>
        <p><strong>Ваша ОС:</strong> {systemData.os}</p>
        <p><strong>Браузер:</strong> {systemData.browser}</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  padding: '20px',
  borderTop: '1px solid #444',
  marginTop: '30px',
  textAlign: 'center',
  fontSize: '14px'
};

const contactStyle = {
  marginTop: '15px',
  fontSize: '14px',
  color: '#444',
  lineHeight: '1.6'
};

const infoStyle = {
  marginTop: '10px',
  fontSize: '12px',
  color: '#888',
  lineHeight: '1.5'
};

const linkStyle = {
  color: '#1d4ed8',
  textDecoration: 'none'
};

export default Footer;