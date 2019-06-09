import React from 'react'
import { Grid } from '@material-ui/core/'
import Seekbar from './seekbar/seekbar'
import Menu from './menu/menu'

const Controlpanel = ({
  onSeekMouseDown,
  onSeekChange,
  onSeekMouseUp,
  isInterface,
  onPlayPause,
  toggleMuted,
  setVolume,
  setFullscreen,
  isFullscreen,
  isPlaying,
  isMuted,
  played,
  loaded,
  duration,
  volume,
}) => {
  return (
    <Grid
      item
      container
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        transition: 'all 0.3s ease',
        opacity: isInterface ? 1 : 0,
      }}
      direction="column"
      justify="space-between"
      alignItems="stretch"
    >
      <Grid // top bar
        item
        style={{
          height: 90,
          width: '100%',
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      <Grid //controls bar
        item
        container
        direction="column"
        justify="flex-end"
        alignItems="stretch"
        style={{
          height: 90,
          width: '100%',
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      >
        <Grid item style={{ width: '100%', position: 'relative' }}>
          <Seekbar
            onSeekMouseDown={onSeekMouseDown}
            onSeekChange={onSeekChange}
            onSeekMouseUp={onSeekMouseUp}
            played={played}
            loaded={loaded}
            duration={duration}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{
            width: '100%',
            height: 36,
            background: 'transparent',
            zIndex: 80,
          }}
        >
          <Menu
            setFullscreen={setFullscreen}
            isFullscreen={isFullscreen}
            isMuted={isMuted}
            toggleMuted={toggleMuted}
            isPlaying={isPlaying}
            onPlayPause={onPlayPause}
            setVolume={setVolume}
            volume={volume}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Controlpanel
