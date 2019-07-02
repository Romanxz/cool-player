import React from 'react'
import { PlayArrow, Pause } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  playpause: {
    zIndex: 100,
    height: 30,
    width: 30,
    marginLeft: 15,
    cursor: 'pointer',
    boxShadow: '2px 2px 1px 2px green',
  },
}))

const Playpause = ({ isPlaying, onPlayPause }) => {
  const classes = useStyles()
  return (
    <>
      {isPlaying ? (
        <Pause onClick={onPlayPause} color="primary" className={classes.playpause} />
      ) : (
        <PlayArrow onClick={onPlayPause} color="primary" className={classes.playpause} />
      )}
    </>
  )
}

export default Playpause
