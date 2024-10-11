import React, { useState } from 'react';
import '../css/desktop/Desktop.css';

function Desktop() {
  const [isBootupComplete, setIsBootupComplete] = useState(false);

  const handleBootupEnd = () => {
    setIsBootupComplete(true);
  };

  return (
    <div className="desktop">
      {/* Background video that keeps playing */}
      <video className="video-desktop" autoPlay muted loop>
        <source src="/assets/video/desktop/Desktop.mp4" type="video/mp4" />
      </video>

      {/* Bootup video that plays on load */}
      {!isBootupComplete && (
        <video className="bootup-video" autoPlay muted onEnded={handleBootupEnd}>
          <source src="/assets/video/desktop/Windows7_Bootup.mp4" type="video/mp4" />
        </video>
      )}

      {/* Desktop content (login or anything else) */}
      {isBootupComplete && (
        <div className="desktop-main">
          {/* Your Windows 7 emulation code or login screen */}
          <h2>Windows 7 Login Screen</h2>
        </div>
      )}
    </div>
  );
}

export default Desktop;