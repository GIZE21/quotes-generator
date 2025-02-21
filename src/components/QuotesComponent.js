
import React, { useState, useEffect } from 'react';

function QuotesComponent() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={styles.container}>
    <h1>Quote Generator</h1>
    <blockquote style={styles.quote}>
      "{quote}"
    </blockquote>
    <footer style={styles.author}>— {author}</footer>
    <button style={styles.button} onClick={fetchQuote}>
      Get New Quote
    </button>
  </div>
  );
}
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  quote: {
    fontSize: '24px',
    margin: '20px 0',
  },
  author: {
    fontSize: '18px',
    color: 'gray',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default QuotesComponent;