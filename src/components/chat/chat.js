import React from 'react'
import { Grid } from '@material-ui/core/'
import Messages from './messages'
import Typeform from './typeform'

class Chat extends React.Component {
  state = {
    messages: [
      { id: 1, name: 'prodesigner666', text: 'yo guys seems like you know nothing about design' },
      { id: 2, name: 'katya', text: 'how dare you' },
      { id: 3, name: 'valera', text: 'stfu kid' },
    ],
  }

  addMessage = textvalue => {
    this.setState({
      messages: [...this.state.messages, { id: Math.random(), name: Math.random(), text: textvalue }],
    })
  }

  render() {
    console.log(this.state)
    return (
      <Grid
        item
        container
        style={{
          height: '100%',
          width: '100%',
        }}
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          item
          style={{
            height: '85%',
            width: '100%',
          }}
        >
          <Messages messages={this.state.messages} />
        </Grid>
        <Grid
          item
          style={{
            height: '14.5%',
            width: '100%',
          }}
        >
          <Typeform addMessage={this.addMessage} />
        </Grid>
      </Grid>
    )
  }
}

export default Chat
