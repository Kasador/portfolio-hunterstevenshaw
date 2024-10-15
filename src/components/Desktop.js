import React, { useState, useEffect } from 'react';
import '../css/desktop/Desktop.css';
import logo from '../img/desktop/login_screen/Windows7_Logo.png';
import loginPicture from '../img/desktop/login_screen/Me.jpg';

function Desktop() {
  const [isBootupComplete, setIsBootupComplete] = useState(false);
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false); // Track background video load

  // Put cursor pointer profile login img
  useEffect(() => {
    // Add event listeners only after the bootup is complete and login picture is available
    if (isBootupComplete) {
      const loginPictureElement = document.querySelector('.login-picture');
      
      // Check if the login picture element is available
      if (loginPictureElement) {
        // Add an event listener to change the cursor when hovering over the image
        const handleMouseEnter = () => {
          loginPictureElement.style.cursor = 'pointer';
        };

        const handleMouseLeave = () => {
          loginPictureElement.style.cursor = 'default';
        };

        loginPictureElement.addEventListener('mouseenter', handleMouseEnter);
        loginPictureElement.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function to remove event listeners when component unmounts
        return () => {
          loginPictureElement.removeEventListener('mouseenter', handleMouseEnter);
          loginPictureElement.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }
  }, [isBootupComplete]); // Re-run this effect when `isBootupComplete` changes

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
            <section className="login-wrapper">
              <div className="login-picture-wrapper">
                <img 
                  className="login-picture"
                  src={loginPicture}
                  alt="Hunter Steven Shaw, the Developer" />
              </div>
            </section>
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