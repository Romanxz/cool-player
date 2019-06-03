import React from 'react'
import Grid from '@material-ui/core/Grid'
import Root from './components/root'
import ReactPlayer from 'react-player'
import Chat from './components/chat'
import Topbar from './components/topbar'
import Controlpanel from './components/controlpanel'

class Coolplayer extends React.Component {
  state = {
    playing: true,
    volume: 0.8,
    muted: true,
    seeking: false,
    played: 0,
    loaded: 0,
    duration: 0,
  }

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onDuration = duration => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  onProgress = progress => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState({
        played: Math.floor(progress.playedSeconds),
        loaded: Math.floor(progress.loadedSeconds),
      })
    }
  }

  ref = player => {
    this.player = player
  }

  render() {
    const { playing, volume, muted, played, loaded, duration } = this.state
    console.log(played + loaded + duration)
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
            <ReactPlayer
              height="100%"
              width="100%"
              url="https://www.youtube.com/watch?v=dE3F6sybNJk"
              ref={this.ref}
              playing={playing}
              volume={volume}
              muted={muted}
              onPlay={this.onPlay}
              onPause={this.onPause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.onEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
            />
          </Grid>
          <Grid item style={{ height: '100%' }} lg={2} md={3} sm={12} xs={12}>
            <Chat />
          </Grid>
        </Grid>
        <Grid
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
          <Grid
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
            <Grid item style={{ height: '10%', width: '100%' }}>
              <Topbar />
            </Grid>
            <Grid item style={{ height: '10%', width: '100%' }}>
              <Controlpanel
                played={played}
                loaded={loaded}
                duration={duration}
              />
            </Grid>
          </Grid>
          <Grid item style={{ height: '100%' }} lg={2} md={3} sm={12} xs={12} />
        </Grid>
      </Root>
    )
  }
}

export default Coolplayer
