import React from 'react';
import Track from './track';

const Jukebox = ({ tracks, isRecording, isPlaying, onPlay }) => (
  <div className="juke-box">
    <div className='juke-box-title'>
      Jukebox
    </div>
    <div className='track-list'>
      {Object.keys(tracks).map(id => (
        <Track
          key={`track-${id}`}
          track={tracks[id]}
          disabled={isRecording || isPlaying}
          onPlay={onPlay(tracks[id])} />
      ))}
    </div>
  </div>
);

export default Jukebox;
