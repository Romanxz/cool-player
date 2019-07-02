import React from 'react'
import Playpause from './buttons/playpause'
import Volume from './buttons/volume'
import Fullscreen from './buttons/fullscreen'
import Time from './time'

const Menu = ({
  isPlaying,
  onPlayPause,
  isMuted,
  toggleMuted,
  setVolume,
  volume,
  setFullscreen,
  isFullscreen,
  played,
  duration,
}) => {
  return (
    <>
      <Playpause isPlaying={isPlaying} onPlayPause={onPlayPause} />
      <Volume isMuted={isMuted} toggleMuted={toggleMuted} setVolume={setVolume} volume={volume} />
      <Fullscreen setFullscreen={setFullscreen} isFullscreen={isFullscreen} />
      <Time played={played} duration={duration} />
    </>
  )
}

export default Menu
