import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    height: '100%',
    width: '100%',
    border: '1px solid',
    boxSizing: 'border-box',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    overflowY: 'auto',
    flexWrap: 'nowrap',
    zIndex: 1,
    borderColor: theme.palette.secondary.light,
    padding: theme.spacing(1),
  },
}))

const Messages = ({ messages }) => {
  const classes = useStyles()
  return (
    <div className={classes.paper}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        // style={{ height: '100%', width: '100%', overflowY: 'scroll' }}
      >
        {messages.map(message => (
          <Grid item style={{ maxWidth: '100%', zIndex: 100 }}>
            <Typography key={message.key} variant="overline" color="primary">
              {message.name}:
            </Typography>
            <Typography key={message.key} variant="caption" color="secondary" display="inline">
              {message.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Messages
