import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    height: '100%',
    width: '100%',
    border: '1px solid',
    boxSizing: 'border-box',
    overflowWrap: 'break-word',
    borderColor: theme.palette.secondary.light,
    padding: theme.spacing(1),
  },
}))

const Messages = ({ messages }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" justify="flex-start">
        {messages.map(message => (
          <div style={{ overflowWrap: 'break-word' }}>
            <Typography key={message.key} variant="overline" color="primary">
              {message.name}:
            </Typography>
            <Typography key={message.key} variant="caption" color="secondary">
              {message.text}
            </Typography>
          </div>
        ))}
      </Grid>
    </Paper>
  )
}

export default Messages
