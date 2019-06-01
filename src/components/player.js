import React from 'react'
import ReactPlayer from 'react-player'

class Player extends React.Component {
  state = {}
  render() {
    return (
      <>
        <ReactPlayer
          height="100%"
          width="100%"
          url="https://www.youtube.com/watch?v=dE3F6sybNJk"
          playing
        />
      </>
    )
  }
}

export default Player
