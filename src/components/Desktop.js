// Desktop.js
import React from 'react';
import '../css/desktop/Desktop.css';

function Desktop() {
  return (
    <div id="desktop">
      <video id="video-desktop" autoPlay muted loop>
        <source src="/assets/video/desktop/Desktop.mp4" type="video/mp4" />
      </video>
      <div id="desktop-main">
        {/* Add your Windows 7 emulation code here */}
        <div id="desktop-time-wrapper">
          <div id="desktop-time">9:03 PM</div>
          <div id="desktop-date">10/4/2024</div>
        </div>
      </div>
    </div>
  );
}

export default Desktop;