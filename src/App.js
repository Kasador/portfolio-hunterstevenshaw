import React, { useEffect, useState } from 'react';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';
import './css/App.css';
import GoogleAnalytics from './services/GoogleAnalytics';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes instead of Switch

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
    <Router>
      <GoogleAnalytics />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={isMobile ? <Mobile /> : <Desktop />} />
        {/* Add more routes if necessary */}
      </Routes>
    </Router>
  );
}

export default App;