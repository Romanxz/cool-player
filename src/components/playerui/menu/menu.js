import React from 'react'
import Playpause from './buttons/playpause'
import Volume from './buttons/volume'

const Menu = ({ isPlaying, onPlayPause, isMuted, toggleMuted }) => {
  return (
    <>
      <Playpause isPlaying={isPlaying} onPlayPause={onPlayPause} />
      <Volume isMuted={isMuted} toggleMuted={toggleMuted} />
    </>
  )
}

export default Menu
