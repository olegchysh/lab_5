import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  // Стан для керування видимістю модального вікна [cite: 142]
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Встановлюємо таймер на 1 хвилину (60000 мс), щоб відкрити вікно [cite: 144]
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    // Очищаємо таймер, якщо компонент буде видалено зі сторінки
    return () => clearTimeout(timer);
  }, []);

  // Якщо вікно не відкрите (isOpen === false), нічого не відображаємо [cite: 120]
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Форма зворотнього зв'язку</h3>
        
        {/* Форма відправляє дані на сервер Formspree [cite: 148, 149] */}
        <form action="https://formspree.io/f/mojkzdqk" method="POST">
          <div style={styles.field}>
            <label>Ім'я:</label>
            <input type="text" name="name" required style={styles.input} />
          </div>
          
          <div style={styles.field}>
            <label>Email:</label>
            <input type="email" name="email" required style={styles.input} />
          </div>
          
          <div style={styles.field}>
            <label>Номер телефону:</label>
            <input type="tel" name="phone" required style={styles.input} />
          </div>
          
          <div style={styles.field}>
            <label>Повідомлення:</label>
            <textarea name="message" required style={styles.textarea}></textarea>
          </div>

          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitBtn}>Відправити</button>
            <button 
              type="button" 
              onClick={() => setIsOpen(false)} 
              style={styles.closeBtn}
            >
              Закрити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Базові стилі для того, щоб це виглядало як модальне вікно
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '400px',
    color: '#333',
  },
  field: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '80px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  submitBtn: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  closeBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default ContactForm;