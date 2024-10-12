// App.js
import React, { useEffect, useState } from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';
import './css/App.css';
import GoogleAnalytics from './services/GoogleAnalytics';

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

  useEffect(() => {
    // This will track page views when the component mounts
    window.gtag('config', 'G-F3DYVCWGXC', {
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <div className="App">
      <GoogleAnalytics />
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}

export default App;