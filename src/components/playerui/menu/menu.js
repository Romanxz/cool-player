import React from 'react'
import Playpause from './buttons/playpause'
import Volume from './buttons/volume'
import Fullscreen from './buttons/fullscreen'

const Menu = ({
  isPlaying,
  onPlayPause,
  isMuted,
  toggleMuted,
  setVolume,
  volume,
  setFullscreen,
  isFullscreen,
}) => {
  return (
    <>
      <div
        style={{
          width: 300,
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Playpause isPlaying={isPlaying} onPlayPause={onPlayPause} />
        <Volume isMuted={isMuted} toggleMuted={toggleMuted} setVolume={setVolume} volume={volume} />
      </div>
      <div
        style={{
          width: 300,
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Fullscreen setFullscreen={setFullscreen} isFullscreen={isFullscreen} />
      </div>
    </>
  )
}

export default Menu
