import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Progressbar from './progressbar'

const thumbstyles = {
  appearance: 'none',
  cursor: 'pointer',
  height: 12,
  width: 12,
  borderRadius: '50%',
  background: 'grey',
  border: '1px solid black',
}

const useStyles = makeStyles({
  seeker: {
    position: 'absolute',
    background: 'transparent',
    cursor: 'pointer',
    height: 2,
    width: '100%',
    appearance: 'none',
    userSelect: 'none',
    top: -4,
    left: -2,
    zIndex: 100,
    transition: 'all 0.2s ease',
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
  const [isMouseOver, setMouseOver] = useState(false)
  const focusRange = () => setMouseOver(true)
  const blurRange = () => setMouseOver(false)
  return (
    <>
      <input
        onMouseDown={props.onSeekMouseDown}
        onChange={props.onSeekChange}
        onMouseUp={props.onSeekMouseUp}
        className={classes.seeker}
        style={{ height: isMouseOver ? 4 : 2, top: isMouseOver ? -6 : -4 }}
        type="range"
        step="any"
        min={0}
        max={duration}
        value={played}
        onMouseOver={focusRange}
        onMouseLeave={blurRange}
      />
      <Progressbar isMouseOver={isMouseOver} played={played} loaded={loaded} duration={duration} />
    </>
  )
}

export default Seekbar
