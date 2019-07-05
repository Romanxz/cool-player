import React from 'react'
import Time from './time'
import Fullscreen from './buttons/fullscreen/fullscreen'
import Play from './buttons/play/play'
import Pause from './buttons/pause/pause'
import Volume from './buttons/volume/volume'

import Volbar from './buttons/volume'

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
      <Play onPlayPause={onPlayPause} />
      <Pause onPlayPause={onPlayPause} />
      <Volume isMuted={isMuted} toggleMuted={toggleMuted} setVolume={setVolume} volume={volume} />
      <Volbar isMuted={isMuted} setVolume={setVolume} volume={volume} />
      <Fullscreen setFullscreen={setFullscreen} isFullscreen={isFullscreen} />
      <Time played={played} duration={duration} />
    </>
  )
}

export default Menu
