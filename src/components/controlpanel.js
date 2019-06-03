import React from 'react'
import { Grid, LinearProgress } from '@material-ui/core/'

const normalise = (value, max) => (value * 100) / max

const Controlpanel = ({ played, loaded, duration }) => {
  return (
    <Grid
      container
      style={{
        position: 'relative',
        background: 'linear-gradient(to bottom, transparent, black)',
        height: '100%',
        width: '100%',
      }}
      direction="column"
      justify="flex-end"
      alignItems="stretch"
    >
      <Grid item style={{ width: '100%' }}>
        <LinearProgress
          color="secondary"
          variant="buffer"
          value={normalise(played, duration)}
          valueBuffer={normalise(loaded, duration)}
        />
        />
      </Grid>
      <Grid item style={{ width: '100%', height: 50, background: 'red' }} />
    </Grid>
  )
}

export default Controlpanel
