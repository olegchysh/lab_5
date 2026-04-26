import React, { useState, useEffect } from 'react';

const Reviews = () => {
  // Використовуємо useState для збереження списку коментарів [cite: 136]
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Використовуємо useEffect для отримання даних при монтуванні компонента [cite: 134]
    fetch('https://jsonplaceholder.typicode.com/posts/19/comments') // Твій 19-й варіант [cite: 135]
      .then(response => response.json())
      .then(data => {
        setComments(data); // Зберігаємо отримані дані у стан [cite: 136]
      })
      .catch(error => console.error('Помилка завантаження:', error));
  }, []); // Порожній масив означає "запустити один раз" [cite: 114]

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Відгуки попередніх роботодавців (Варіант 19)</h2>
      <div className="reviews-list">
        {/* Використовуємо метод map() для створення списку карток [cite: 137] */}
        {comments.map(comment => (
          <div key={comment.id} style={cardStyle}>
            <h4 style={{ margin: '0 0 10px 0', textTransform: 'capitalize' }}>{comment.name}</h4>
            <p style={{ fontStyle: 'italic' }}>"{comment.body}"</p>
            <small style={{ color: '#666' }}>Email: {comment.email}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

// Стилі для карток відгуків
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '15px',
  backgroundColor: '#f9f9f9',
  color: '#333',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

export default Reviews;