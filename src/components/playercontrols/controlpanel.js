import React from 'react'
import { Grid } from '@material-ui/core/'
import Progressbar from './progressbar'

const Controlpanel = ({ played, loaded, duration }) => {
  return (
    <Grid //root grid
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: '4px',
        left: '4px',
      }}
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      <Grid // player box
        item
        container
        style={{ height: '100%' }}
        direction="column"
        justify="space-between"
        alignItems="stretch"
        lg={10}
        md={9}
        sm={12}
        xs={12}
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
            <Progressbar played={played} loaded={loaded} duration={duration} />
          </Grid>
          <Grid item style={{ width: '100%', height: 40, background: 'blue' }} />
        </Grid>
      </Grid>

      <Grid item style={{ height: '100%' }} lg={2} md={3} sm={12} xs={12} />
    </Grid>
  )
}

export default Controlpanel
