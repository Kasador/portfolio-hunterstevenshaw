// Mobile.js
import React from 'react';
import '../css/mobile/Mobile.css';

function Mobile() {
  return (
    <div class="mobile">
      <video class="video-mobile" autoPlay muted loop>
        <source src="/assets/video/mobile/Mobile_v5_Slow.mp4" type="video/mp4" />
      </video>
      <div class="mobile-main">
        {/* Add your iPhone emulation code here */}
        <div class="mobile-header">
          <div class="mobile-carrier">5G</div>
          <div class="mobile-service-battery">Full</div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;