import React from 'react'
import Paper from '@material-ui/core/Paper'

class Chat extends React.Component {
  state = {}
  render() {
    return (
      <>
        <Paper
          style={{
            background: 'green',
            position: 'relative',
            height: '100%',
            width: '100%',
          }}
        />
      </>
    )
  }
}

export default Chat
