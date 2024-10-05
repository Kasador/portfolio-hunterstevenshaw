// Mobile.js
import React from 'react';
import '../css/mobile/Mobile.css';

function Mobile() {
  return (
    <div id="mobile">
      <video id="video-mobile" autoPlay muted loop>
        <source src="/assets/video/Mobile_v5_Slow.mp4" type="video/mp4" />
      </video>
      <div id="mobile-main">
        {/* Add your iPhone emulation code here */}
        <div id="mobile-header">
          <div id="mobile-carrier">5G</div>
          <div id="mobile-service-battery">Full</div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;