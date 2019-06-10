import React from 'react'
import { TextField, Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const CustomTextField = withStyles(theme => ({
  root: {
    height: '100%',
    '& .MuiOutlinedInput-root': {
      height: '100%',
      background: 'white',
      '& fieldset': {
        borderColor: theme.palette.secondary.light,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.dark,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
}))(TextField)

const styles = theme => ({
  button: { height: 36, width: '50%' },
})

class Typeform extends React.Component {
  state = { textvalue: '' }

  onChange = e => {
    this.setState({ textvalue: e.target.value })
  }

  addMessage = e => {
    e.preventDefault()
    this.props.addMessage(this.state.textvalue)
    this.setState({
      textvalue: '',
    })
  }

  render() {
    const { input, button } = this.props.classes
    return (
      <Grid
        container
        style={{ height: '100%' }}
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid item style={{ width: '100%', height: '70%' }}>
          <CustomTextField
            className={input}
            type="text"
            fullWidth
            margin="none"
            variant="outlined"
            multiline
            rows="4"
            rowsMax="4"
            placeholder="your message here"
            value={this.state.textvalue}
            onChange={this.onChange}
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ width: '100%', height: '30%' }}
        >
          <Button className={button} variant="contained" color="secondary" onClick={this.addMessage}>
            Send
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Typeform)
