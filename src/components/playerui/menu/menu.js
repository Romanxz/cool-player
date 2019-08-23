import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Time from './timer/time'
import Volumebar from './volumebar/volumebar'
import Coolbutton from './buttons/coolbutton'
import Fullscreenicon from './buttons/fscreenicon'
import Pauseicon from './buttons/pauseicon'
import Playicon from './buttons/playicon'
import Volumeicon from './buttons/volumeicon'

const styles = theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid white',
    width: '100%',
    height: '100%',
    // transformStyle: 'preserve-3d',
    // transform: 'perspective(1000px) rotateX(40deg)',
  },
})

class Menu extends React.Component {
  state = { mouseX: '', mouseY: '' }

  render() {
    const {
      isPlaying,
      onPlayPause,
      onPlay,
      onPause,
      isMuted,
      toggleMuted,
      setVolume,
      volume,
      setFullscreen,
      isFullscreen,
      played,
      duration,
      classes,
    } = this.props
    return (
      <div className={classes.container}>
        <Coolbutton onClick={onPlay}>
          <Playicon />
        </Coolbutton>
        <Coolbutton onClick={onPause}>
          <Pauseicon />
        </Coolbutton>
        <Time played={played} duration={duration} />
        <Coolbutton isMuted={isMuted} onClick={toggleMuted} volume={volume}>
          <Volumeicon />
        </Coolbutton>
        <Coolbutton onClick={setFullscreen} isFullscreen={isFullscreen}>
          <Fullscreenicon />
        </Coolbutton>
        {/* <Volbar isMuted={isMuted} setVolume={setVolume} volume={volume} /> */}
      </div>
    )
  }
}

export default withStyles(styles)(Menu)
