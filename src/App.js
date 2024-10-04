import './css/App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the client is on mobile or desktop
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent)) {
      setIsMobile(true);
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <video autoPlay muted loop className="background-video">
          <source src={isMobile ? '/assets/video/Mobile_v5_Slow.mp4' : '/assets/video/Desktop.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
}

export default App;