import React from 'react'
import { VolumeUp, VolumeDown, VolumeOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const thumbstyles = {
  appearance: 'none',
  cursor: 'pointer',
  height: 12,
  width: 12,
  borderRadius: '50%',
  background: 'red',
  border: '1px solid black',
}

const useStyles = makeStyles(theme => ({
  volume: {
    height: 30,
    width: 30,
    marginLeft: 15,
    cursor: 'pointer',
  },
  seeker: {
    // position: 'relative',
    marginLeft: 15,
    background: 'grey',
    cursor: 'pointer',
    height: 2,
    width: 50,
    appearance: 'none',
    userSelect: 'none',
    top: 0,
    left: 0,
    zIndex: 100,
    transition: 'all 0.1s ease',
    '&::-webkit-slider-thumb': {
      ...thumbstyles,
    },
    '&::-moz-range-thumb': { ...thumbstyles },
    '&::-ms-thumb': { ...thumbstyles },
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
