
import React from 'react';
import './animation.css';

const Animation = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video-background__video">
        <source src="./Background 1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-background__overlay">
        <h1>Your Foreground Content</h1>
        <p>Scroll down to see the parallax effect.</p>
      </div>
    </div>
  );
};

export default Animation;
