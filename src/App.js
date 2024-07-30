import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [isBackendConnected, setIsBackendConnected] = useState(false);

  useEffect(() => {
    fetch('/api')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        setMessage(data.message);
        setIsBackendConnected(true);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setIsBackendConnected(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isBackendConnected ? (
          <h1>{message}</h1>
        ) : (
          <h1>Unable to connect to the back-end</h1>
        )}
      </header>
    </div>
  );
}

export default App;
