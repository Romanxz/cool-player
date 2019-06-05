import React from 'react'
import { makeStyles } from '@material-ui/styles'

const Thumbstyles = {
  appearance: 'none',
  cursor: 'pointer',
  height: 16,
  width: 16,
  borderRadius: '50%',
  background: 'grey',
  border: '1px solid black',
}

const useStyles = makeStyles({
  seeker: {
    position: 'absolute',
    background: 'yellow',
    height: 4,
    width: '100%',
    appearance: 'none',
    top: -2,
    left: -2,
    '&::-webkit-slider-thumb': {
      ...Thumbstyles,
    },
    '&::-moz-range-thumb': { ...Thumbstyles },
    '&::-ms-thumb': { ...Thumbstyles },
  },
})

const Progressbar = ({ played, loaded, duration }) => {
  const classes = useStyles()
  return (
    <div>
      <input className={classes.seeker} type="range" min={0} max={duration} value={played} />
    </div>
  )
}

export default Progressbar
