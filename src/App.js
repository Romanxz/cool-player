import React from 'react'
import Grid from '@material-ui/core/Grid'
import Root from './components/root'
import ReactPlayer from 'react-player'
import Chat from './components/chat'
import Controlpanel from './components/playerui/controlpanel'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './components/theme/theme'

class Coolplayer extends React.Component {
  state = {
    isPlaying: true,
    volume: 0.8,
    isMuted: false,
    isSeeking: false,
    played: 0,
    loaded: 0,
    duration: 0,
  }

  onPlayPause = () => {
    this.setState({ isPlaying: !this.state.isPlaying })
  }

  toggleMuted = () => {
    this.setState({ isMuted: !this.state.isMuted })
  }

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseDown = e => {
    this.setState({ isSeeking: true })
  }

  onSeekMouseUp = e => {
    this.setState({ isSeeking: false })
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
    const { isPlaying, volume, isMuted, played, loaded, duration } = this.state
    return (
      <MuiThemeProvider theme={theme}>
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
              <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                <ReactPlayer
                  style={{ position: 'absolute' }}
                  height="100%"
                  width="100%"
                  url="https://www.youtube.com/watch?v=dE3F6sybNJk"
                  ref={this.ref}
                  playing={isPlaying}
                  volume={volume}
                  muted={isMuted}
                  onPlay={this.onPlay}
                  onPause={this.onPause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.onEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.onProgress}
                  onDuration={this.onDuration}
                />
                <Controlpanel
                  onPlayPause={this.onPlayPause}
                  onSeekMouseDown={this.onSeekMouseDown}
                  onSeekChange={this.onSeekChange}
                  onSeekMouseUp={this.onSeekMouseUp}
                  toggleMuted={this.toggleMuted}
                  isPlaying={isPlaying}
                  isMuted={isMuted}
                  played={played}
                  loaded={loaded}
                  duration={duration}
                />
              </div>
            </Grid>
            <Grid item style={{ height: '100%' }} lg={2} md={3} sm={12} xs={12}>
              <Chat />
            </Grid>
          </Grid>
        </Root>
      </MuiThemeProvider>
    )
  }
}

export default Coolplayer
