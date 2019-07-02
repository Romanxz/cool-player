import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const normalize = (value, max) => (value * 100) / max

const thumbstyles = {
  appearance: 'none',
  cursor: 'pointer',
  height: 14,
  width: 14,
  borderRadius: '50%',
  border: 'none',
}

const useStyles = makeStyles(theme => ({
  seeker: {
    position: 'relative',
    background: 'transparent',
    boxSizing: 'border-box',
    cursor: 'pointer',
    height: 6,
    width: '100%',
    appearance: 'none',
    userSelect: 'none',
    zIndex: 100,
    transition: 'all 0.3s ease',
    '&::-webkit-slider-thumb': {
      ...thumbstyles,
      boxShadow: `0 0 8px 2px ${theme.palette.primary.dark},
      inset 0 0 6px 4px ${theme.palette.primary.light}`,
      background: theme.palette.primary.main,
      '&:hover': {
        boxShadow: `0 0 10px 3px ${theme.palette.primary.dark},
      inset 0 0 10px 5px ${theme.palette.primary.light}`,
      },
    },
    '&::-moz-range-thumb': {
      ...thumbstyles,
      boxShadow: `0 0 8px 2px ${theme.palette.primary.dark},
      inset 0 0 6px 4px ${theme.palette.primary.light}`,
      background: theme.palette.primary.main,
      '&:hover': {
        boxShadow: `0 0 10px 3px ${theme.palette.primary.dark},
      inset 0 0 10px 5px ${theme.palette.primary.light}`,
      },
    },
    '&::-ms-thumb': {
      ...thumbstyles,
      boxShadow: `0 0 8px 2px ${theme.palette.primary.dark},
      inset 0 0 6px 4px ${theme.palette.primary.light}`,
      background: theme.palette.primary.main,
      '&:hover': {
        boxShadow: `0 0 10px 3px ${theme.palette.primary.dark},
      inset 0 0 10px 5px ${theme.palette.primary.light}`,
      },
    },
    '&:focus': { outline: 'none' },
  },
  '@keyframes glow': {
    '0%': { backgroundPosition: [0, 0] },
    '50%': { backgroundPosition: [1000, 0] },
    '100%': { backgroundPosition: [0, 0] },
  },
  played: {
    zIndex: 90,
    background: theme.palette.primary.main,
    borderRadius: 10,
    height: 2,
    width: values => `${normalize(values.played, values.duration)}%`,
    transition: 'all 0.1s ease',
    '&::before': {
      opacity: 0.6,
      animationName: '$glow',
      animationDuration: 15000,
      animationTimingFucnction: 'linear',
      animationIterationCount: 'infinite',
      animationPlayState: 'running',
      zIndex: -10,
      content: `""`,
      position: 'absolute',
      top: -1,
      left: -1,
      background:
        'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
      filter: 'blur(5px)',
      width: 'calc(100% + 2px)',
      height: 'calc(100% + 2px)',
    },
  },
  loaded: {
    borderRadius: 10,
    zIndex: 89,
    background: theme.palette.secondary.dark,
    height: 2,
    width: values => `${normalize(values.loaded, values.duration)}%`,
    transition: 'all 0.1s ease',
  },
  none: {
    borderRadius: 10,
    zIndex: 88,
    background: theme.palette.secondary.light,
    height: 2,
    width: '100%',
    transition: 'all 0.1s ease',
  },
}))

const Progressbar = ({ values, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [isMouseOver, setMouseOver] = useState(false)
  const classes = useStyles(values)
  return (
    <>
      <Grid item container style={{ position: 'absolute' }}>
        <input
          onMouseDown={props.onSeekMouseDown}
          onChange={props.onSeekChange}
          onMouseUp={props.onSeekMouseUp}
          className={classes.seeker}
          type="range"
          step="any"
          min={0}
          max={values.duration}
          value={values.played}
          onMouseOver={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
        />
      </Grid>
      <Grid item container style={{ position: 'absolute' }}>
        <div className={classes.played} />
      </Grid>
      <Grid item container style={{ position: 'absolute' }}>
        <div className={classes.loaded} />
      </Grid>
      <Grid item container style={{ position: 'absolute' }}>
        <div className={classes.none} />
      </Grid>
    </>
  )
}

export default Progressbar
