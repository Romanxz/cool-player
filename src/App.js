import React from 'react'
import Grid from '@material-ui/core/Grid'
import Root from './components/root'
import Player from './components/player'
import Chat from './components/chat'

function App() {
  return (
    <Root>
      <Grid
        container
        style={{ height: '90%', width: '95%' }}
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item style={{ height: '100%', width: '80%' }} xl={9}>
          <Player />
        </Grid>
        <Grid item style={{ height: '100%', width: '20%' }} xl={3}>
          <Chat />
        </Grid>
      </Grid>
    </Root>
  )
}

export default App
