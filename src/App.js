import React from 'react'
import Grid from '@material-ui/core/Grid'
import Root from './components/root'
import Player from './components/player'
import Chat from './components/chat'
import Progressbar from './components/progressbar'

function App() {
  return (
    <Root>
      <Grid
        style={{ height: '100%', width: '100%' }}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item style={{ height: '100%' }} lg={10} md={9} sm={12} xs={12}>
          <Player>
            <Progressbar />
          </Player>
        </Grid>
        <Grid item style={{ height: '100%' }} lg={2} md={3} sm={12} xs={12}>
          <Chat />
        </Grid>
      </Grid>
    </Root>
  )
}

export default App
