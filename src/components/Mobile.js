import React, { useState } from 'react';
import '../css/mobile/Mobile.css';

function Mobile() {
  const [isBootupCompletePhone, setIsBootupCompletePhone] = useState(false);
  const [isBackgroundLoadedPhone, setIsBackgroundLoadedPhone] = useState(false); // Track background video load

  const handleBootupPhoneEnd = () => {
    setIsBootupCompletePhone(true);
  };

  const handleBackgroundLoadedPhone = () => {
    setIsBackgroundLoadedPhone(true);
  };

  return (
    <div className="mobile">
      {/* Background video that keeps playing */}
      <video 
        className="video-mobile" 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto" // Ensures background video is preloaded 
        onCanPlayThrough={handleBackgroundLoadedPhone} // Fires when the background video is ready to play
      >
        <source src="/assets/video/mobile/Mobile_v5_Slow.mp4" type="video/mp4" />
      </video>

      {/* Bootup video that plays after background video has loaded */}
      {isBackgroundLoadedPhone && !isBootupCompletePhone && (
        <video 
          className="bootup-video-phone" 
          autoPlay 
          muted 
          playsInline 
          onEnded={handleBootupPhoneEnd} // Handle bootup video end
        >
          <source src="/assets/video/mobile/iPhone_Bootup_Compressed.mp4" type="video/mp4" />
        </video>
      )}

      {/* Mobile content (login or anything else) */}
      {isBootupCompletePhone && (
        <div className="mobile-main">
          {/* IOS emulation code or login screen */}
          <h2>IOS Login Screen</h2>
        </div>
      )}
    </div>
  );
}

export default Mobile;