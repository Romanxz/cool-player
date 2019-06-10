import React from 'react'
import Grid from '@material-ui/core/Grid'
import Root from './components/root'
import ReactPlayer from 'react-player'
import Chat from './components/chat/chat'
import Controlpanel from './components/playerui/controlpanel'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './components/theme/theme'
import screenfull from 'screenfull'

class Coolplayer extends React.Component {
  state = {
    isFullscreen: false,
    isPlaying: false,
    isInterface: false,
    volume: 0.8,
    isMuted: true,
    isSeeking: false,
    played: 0,
    loaded: 0,
    duration: 0,
  }

  toggleInterface = () => {
    this.setState({ isInterface: true })
    // setTimeout(() => this.setState({ isInterface: false }), 8000)
  }

  onPlayPause = () => {
    this.setState({ isPlaying: !this.state.isPlaying })
  }

  toggleMuted = () => {
    this.setState({ isMuted: !this.state.isMuted })
  }

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  setFullscreen = () => {
    screenfull.toggle(document.getElementById('fullscreendiv'))
    this.setState({ isFullscreen: !this.state.isFullscreen })
  }

  onSeekChange = e => {
    this.setState({ played: Math.floor(e.target.value) })
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
    if (!this.state.isSeeking) {
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
    const { isPlaying, volume, isMuted, played, loaded, duration, isFullscreen, isInterface } = this.state
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
              <div
                id="fullscreendiv"
                style={{ height: '100%', width: '100%', position: 'relative' }}
                // onMouseMove={this.toggleInterface}
                onClick={this.toggleInterface}
              >
                <div
                  style={{ height: '100%', width: '100%', zIndex: 50, position: 'absolute' }}
                  onClick={this.onPlayPause}
                  onDoubleClick={this.setFullscreen}
                />
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
                  isInterface={isInterface}
                  onPlayPause={this.onPlayPause}
                  onSeekMouseDown={this.onSeekMouseDown}
                  onSeekChange={this.onSeekChange}
                  onSeekMouseUp={this.onSeekMouseUp}
                  toggleMuted={this.toggleMuted}
                  setVolume={this.setVolume}
                  setFullscreen={this.setFullscreen}
                  isFullscreen={isFullscreen}
                  isPlaying={isPlaying}
                  isMuted={isMuted}
                  played={played}
                  loaded={loaded}
                  duration={duration}
                  volume={volume}
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
