import React from 'react'
import { Grid } from '@material-ui/core/'
import Progressbar from './progressbar/progressbar'
import Menu from './menu/menu'
import Chat from './chat/chat'

const Controlpanel = ({
  onSeekMouseDown,
  onSeekChange,
  onSeekMouseUp,
  isInterface,
  onPlayPause,
  onPlay,
  onPause,
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
          height: 20,
          width: '100%',
          // background: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      <Grid
        item
        container
        style={{ width: '100%', posiotion: 'relative', height: '70%' }}
        direction="column"
        justify="flex-start"
        alignItems="flex-end"
      >
        <Chat />
      </Grid>
      <Grid //controls bar
        item
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        style={{
          height: 70,
          width: '100%',
          // background: 'linear-gradient(to bottom, transparent, black)',
          // background: 'blue',
        }}
      >
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ width: '95%', height: '20%', position: 'relative' }}
        >
          <Progressbar
            onSeekMouseDown={onSeekMouseDown}
            onSeekChange={onSeekChange}
            onSeekMouseUp={onSeekMouseUp}
            values={{ played, loaded, duration }}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{
            width: '100%',
            height: '80%',
          }}
        >
          <Menu
            setFullscreen={setFullscreen}
            isFullscreen={isFullscreen}
            isMuted={isMuted}
            toggleMuted={toggleMuted}
            isPlaying={isPlaying}
            onPlayPause={onPlayPause}
            onPlay={onPlay}
            onPause={onPause}
            setVolume={setVolume}
            volume={volume}
            played={played}
            duration={duration}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Controlpanel
