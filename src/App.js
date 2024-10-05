// App.js
import React, { useEffect, useState } from 'react';
import Desktop from './components/Desktop'; // New component
import Mobile from './components/Mobile'; // New component
import './css/App.css'; // Your CSS goes here

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/android|iPhone|iPad/i.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="App">
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}

export default App;