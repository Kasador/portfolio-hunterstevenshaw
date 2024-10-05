// Desktop.js
import React from 'react';
import '../css/desktop/Desktop.css';

function Desktop() {
  return (
    <div class="desktop">
      <video class="video-desktop" autoPlay muted loop>
        <source src="/assets/video/desktop/Desktop.mp4" type="video/mp4" />
      </video>
      <div class="desktop-main">
        {/* Add your Windows 7 emulation code here */}
        <div class="desktop-time-wrapper">
          <div class="desktop-time">9:03 PM</div>
          <div class="desktop-date">10/4/2024</div>
        </div>
      </div>
    </div>
  );
}

export default Desktop;