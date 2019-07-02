import React from 'react'
import { VolumeUp, VolumeDown, VolumeOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const thumbstyles = {
  appearance: 'none',
  cursor: 'pointer',
  height: 12,
  width: 12,
  borderRadius: '50%',
  border: '1px solid',
}

const useStyles = makeStyles(theme => ({
  volume: {
    zIndex: 100,
    height: 30,
    width: 30,
    marginLeft: 15,
    cursor: 'pointer',
  },
  seeker: {
    // position: 'relative',
    zIndex: 100,
    marginLeft: 15,
    background: theme.palette.secondary.dark,
    cursor: 'pointer',
    height: 2,
    width: 60,
    appearance: 'none',
    userSelect: 'none',
    top: 0,
    left: 0,
    transition: 'all 0.1s ease',
    '&::-webkit-slider-thumb': {
      ...thumbstyles,
      background: theme.palette.primary.main,
      borderColor: theme.palette.secondary.dark,
    },
    '&::-moz-range-thumb': {
      ...thumbstyles,
      background: theme.palette.primary.main,
      borderColor: theme.palette.secondary.dark,
    },
    '&::-ms-thumb': {
      ...thumbstyles,
      background: theme.palette.primary.main,
      borderColor: theme.palette.secondary.dark,
    },
    '&:focus': { outline: 'none' },
  },
}))

const Volume = ({ isMuted, toggleMuted, setVolume, volume }) => {
  const classes = useStyles()
  return (
    <>
      {isMuted || volume === 0 ? (
        <VolumeOff onClick={toggleMuted} color="primary" className={classes.volume} />
      ) : volume >= 0.6 ? (
        <VolumeUp onClick={toggleMuted} color="primary" className={classes.volume} />
      ) : (
        <VolumeDown onClick={toggleMuted} color="primary" className={classes.volume} />
      )}
      <input
        className={classes.seeker}
        onChange={setVolume}
        type="range"
        step="any"
        min={0}
        max={1}
        value={volume}
      />
    </>
  )
}

export default Volume
