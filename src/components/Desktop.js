import React, { useState } from 'react';
import '../css/desktop/Desktop.css';
import logo from '../img/desktop/Windows7_Logo.png';

function Desktop() {
  const [isBootupComplete, setIsBootupComplete] = useState(false);
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false); // Track background video load

  const handleBootupEnd = () => {
    setIsBootupComplete(true);
  };

  const handleBackgroundLoaded = () => {
    setIsBackgroundLoaded(true);
  };

  return (
    <div className="desktop">
      {/* Background video that keeps playing */}
      <video 
        className="video-desktop" 
        autoPlay 
        muted 
        loop 
        preload="auto" // Ensures background video is preloaded 
        onCanPlayThrough={handleBackgroundLoaded} // Fires when background video is loaded and ready to play
      >
        <source src="/assets/video/desktop/Desktop.mp4" type="video/mp4" />
      </video>

      {/* Bootup video that plays only after background video has loaded */}
      {isBackgroundLoaded && !isBootupComplete && (
        <video 
          className="bootup-video" 
          autoPlay 
          muted 
          onEnded={handleBootupEnd} // Handle bootup video end
        >
          <source src="/assets/video/desktop/Windows7_Bootup.mp4" type="video/mp4" />
        </video>
      )}

      {/* Desktop content (login or anything else) */}
      {isBootupComplete && (
        <div className="desktop-main">
          <div className="login-screen">
            <footer>
              <img
                className="windows7-logo"
                src={logo} 
                alt="Windows 7 Logo" />
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default Desktop;