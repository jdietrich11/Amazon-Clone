import React from 'react';

import './video-card.scss';

const VideoCard = ({ video }) => {
  return (
    <div className='video-card'>
      <div className='video-title'>{video[0].title}</div>
      <video
        width='100%'
        height='100%'
        preload='auto'
        controls
        autoPlay={true}
        muted
        loop
      >
        <source src={video[0].src} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoCard;
