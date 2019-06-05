import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Progressbar from './progressbar'

const thumbstyles = {
  appearance: 'none',
  cursor: 'pointer',
  height: 14,
  width: 14,
  borderRadius: '50%',
  background: 'grey',
  border: '1px solid black',
}

const useStyles = makeStyles({
  seeker: {
    position: 'absolute',
    background: 'transparent',
    height: 2,
    width: '100%',
    appearance: 'none',
    userSelect: 'none',
    top: -4,
    left: -2,
    zIndex: 100,
    transition: 'all 0.1s ease',
    '&::-webkit-slider-thumb': {
      ...thumbstyles,
    },
    '&::-moz-range-thumb': { ...thumbstyles },
    '&::-ms-thumb': { ...thumbstyles },
    '&:focus': { outline: 'none' },
  },
})

const Seekbar = ({ played, loaded, duration, ...props }) => {
  const classes = useStyles()
  const [isFocused, setFocus] = useState(false)
  return (
    <>
      <input
        onMouseDown={props.onMouseDown}
        onChange={props.onChange}
        onMouseUp={props.onMouseUp}
        className={classes.seeker}
        style={{ height: isFocused ? 4 : 2, top: isFocused ? -6 : -4 }}
        type="range"
        step="any"
        min={0}
        max={duration}
        value={played}
        onFocus={() => setFocus({ isFocused: true })}
        onBlur={() => setFocus({ isFocused: false })}
      />
      <Progressbar isFocused={isFocused} played={played} loaded={loaded} duration={duration} />
    </>
  )
}

export default Seekbar
