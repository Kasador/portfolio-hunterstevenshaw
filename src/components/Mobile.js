// Mobile.js
import React from 'react';
import '../css/mobile/Mobile.css';

function Mobile() {
  return (
    <div className="mobile">
      <video className="video-mobile"
        autoPlay="autoplay"
        playsInLine="playsinline" 
        loop="true" 
        muted="true">
        <source src="/assets/video/mobile/Mobile_v5_Slow.mp4" type="video/mp4" />
      </video>
      <div className="mobile-main">
        {/* Add your iPhone emulation code here */}
      </div>
    </div>
  );
}

export default Mobile;