import React, { useState, useEffect, useRef } from 'react';
import '../css/desktop/Desktop.css';
import logo from '../img/desktop/login_screen/Windows7_Logo.png';
import loginPicture from '../img/desktop/login_screen/Me.jpg';
import loginBtn from '../img/desktop/login_screen/Input_Btn.png';
import switchUserBtn from '../img/desktop/login_screen/Switch_User_Btn.png';
import powerBtn from '../img/desktop/login_screen/Shutdown_Btn.png';

function Desktop() {
  const [isBootupComplete, setIsBootupComplete] = useState(false);
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false); // Track background video load

  const loginPictureRef = useRef(null);

  // Put cursor pointer profile login img
  useEffect(() => {
    if (isBootupComplete && loginPictureRef.current) {
      const loginPictureElement = loginPictureRef.current;
      const getLoginAssets = document.querySelector('.login-input-wrapper');
      const getSwitchUserBtn = document.querySelector('.switch-user-btn');
      const getInputField = document.querySelector('#input-login-field');
      const getLoginBtn = document.querySelector('.login-btn');

      // const getPicture = loginPicture;

      const handleMouseEnter = () => {
        loginPictureElement.style.cursor = 'pointer';
      };

      const handleMouseLeave = () => {
        loginPictureElement.style.cursor = 'default';
      };

      // Add event listeners >>>
      // Event handler for profile pricture
      loginPictureElement.addEventListener('click', () => {
        // Test if clicked
        console.log('You clicked the picture!');
        getLoginAssets.style.display = 'block';
      }); 

      // Event handler for switch button
      getSwitchUserBtn.addEventListener('click', () => {
        // Test if clicked
        console.log('You clicked switch user button!');
        getLoginAssets.style.display = 'none';
      }); 

      // Event handler for login button
      getLoginBtn.addEventListener('click', () => {
        // Test if clicked
        console.log('You clicked the login button!');
        let passwordInfo = getInputField.value;

        if (!passwordInfo.reportValidity()) {
          console.log(`You can't login without a password.`);
        }
        console.log(`The password you entered was ${passwordInfo}`);
      }); 


      loginPictureElement.addEventListener('mouseenter', handleMouseEnter);
      loginPictureElement.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners when component unmounts or dependencies change
      return () => {
        loginPictureElement.removeEventListener('mouseenter', handleMouseEnter);
        loginPictureElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isBootupComplete]);  // Dependency ensures it runs after bootup is complete

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
                  ref={loginPictureRef}
                  className="login-picture"
                  src={loginPicture}
                  alt="Hunter Steven Shaw, the Developer" />
              </div>
              <span id="login-username">Hunter Shaw</span> {/* Login Username */}
              <div className="login-input-wrapper">
                <input type='password' id="input-login-field"></input>
                <img
                  className="login-btn"
                  src={loginBtn}
                  alt="Button to login" />
                  <img
                  className="switch-user-btn"
                  src={switchUserBtn}
                  alt="Button to switch users" />
              </div>
            </section>
            <footer>
              <img
                className="windows7-logo"
                src={logo} 
                alt="Windows 7 Logo" />
              <img
                className="power-btn"
                src={powerBtn} 
                alt="Windows 7 shutdown power button" />
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default Desktop;