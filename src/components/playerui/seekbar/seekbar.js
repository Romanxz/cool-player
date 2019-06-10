import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Progressbar from './progressbar'

const thumbstyles = {
  appearance: 'none',
  cursor: 'pointer',
  height: 14,
  width: 14,
  borderRadius: '50%',
  border: '1px solid',
}

const useStyles = makeStyles(theme => ({
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

const Seekbar = ({ played, loaded, duration, ...props }) => {
  const classes = useStyles()
  const [isMouseOver, setMouseOver] = useState(false)
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
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      />
      <Progressbar isMouseOver={isMouseOver} played={played} loaded={loaded} duration={duration} />
    </>
  )
}

export default Seekbar
