import React from 'react'
import { VolumeUp, VolumeOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  volume: {
    height: 30,
    width: 30,
    marginLeft: 15,
    cursor: 'pointer',
  },
}))

const Volume = ({ isMuted, toggleMuted }) => {
  const classes = useStyles()
  return (
    <>
      {isMuted ? (
        <VolumeOff onClick={toggleMuted} color="primary" className={classes.volume} />
      ) : (
        <VolumeUp onClick={toggleMuted} color="primary" className={classes.volume} />
      )}
    </>
  )
}

export default Volume
