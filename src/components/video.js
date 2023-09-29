// src/components/VideoPlayer.js

import React from 'react';
import './Course1.css'
const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video controls>
        <source src="https://res.cloudinary.com/dfipoufmj/video/upload/v1695937698/IMG_1368_u6tfki.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
