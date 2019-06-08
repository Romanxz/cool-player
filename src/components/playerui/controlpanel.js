import React from 'react'
import { Grid } from '@material-ui/core/'
import Seekbar from './seekbar/seekbar'
import Menu from './menu/menu'

const Controlpanel = ({
  onSeekMouseDown,
  onSeekChange,
  onSeekMouseUp,
  onPlayPause,
  toggleMuted,
  isPlaying,
  isMuted,
  played,
  loaded,
  duration,
}) => {
  return (
    <Grid
      item
      container
      style={{ height: '100%', width: '100%', position: 'absolute' }}
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
          justify="flex-start"
          alignItems="center"
          style={{ width: '100%', height: 36, background: 'transparent', zIndex: 80 }}
        >
          <Menu isMuted={isMuted} toggleMuted={toggleMuted} isPlaying={isPlaying} onPlayPause={onPlayPause} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Controlpanel
