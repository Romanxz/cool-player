import React from 'react'
import { PlayArrow, Pause } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  playpause: {
    height: 30,
    width: 30,
    marginLeft: 15,
  },
}))

const Buttons = props => {
  const classes = useStyles()
  return (
    <>
      {props.isPlaying ? (
        <Pause onClick={props.onPlayPause} color="primary" className={classes.playpause} />
      ) : (
        <PlayArrow onClick={props.onPlayPause} color="primary" className={classes.playpause} />
      )}
    </>
  )
}

export default Buttons
