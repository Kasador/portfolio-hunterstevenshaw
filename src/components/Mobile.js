import React, { useState } from 'react';
import '../css/mobile/Mobile.css';

function Mobile() {
  const [isBootupCompletePhone, setIsBootupCompletePhone] = useState(false);

  const handleBootupPhoneEnd = () => {
    setIsBootupCompletePhone(true);
  };

  return (
    <div className="mobile">
      <video className="video-mobile"
              autoPlay="autoplay"
              playsInLine="playsinline" 
              loop="true" 
              muted="true">
        <source src="/assets/video/mobile/Mobile_v5_Slow.mp4" type="video/mp4" />
      </video>

      {/* Bootup video that plays on load */}
      {!isBootupCompletePhone && (
        <video className="bootup-video-phone"
                onEnded={handleBootupPhoneEnd}
                autoPlay="autoplay"
                muted="true"
                playsInLine="playsinline">
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