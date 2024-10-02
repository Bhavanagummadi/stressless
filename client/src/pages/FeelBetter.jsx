import React, { useRef } from 'react';
import Emotion from './Emotion';
import Music from './Music';

const FeelBetter = () => {
  const musicSectionRef = useRef(null);

  const handleNoClick = () => {
    // Scroll to the music section smoothly
    if (musicSectionRef.current) {
      musicSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Emotion onNoClick={handleNoClick} />
      {/* Create a gap between Emotion and Music components */}
      <div style={{ height: '100vh' }}></div>
      <div ref={musicSectionRef}>
        <Music />
      </div>
    </div>
  );
};

export default FeelBetter;
