// Desktop.js
import React from 'react';
import '../css/desktop/Desktop.css';

function Desktop() {
  return (
    <div className="desktop">
      <video className="video-desktop" autoPlay muted loop>
        <source src="/assets/video/desktop/Desktop.mp4" type="video/mp4" />
      </video>
      <div className="desktop-main">
        {/* Add your Windows 7 emulation code here */}
      </div>
    </div>
  );
}

export default Desktop;