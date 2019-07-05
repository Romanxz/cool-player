import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  '@keyframes glow': {
    '0%': { height: 54, width: 54, transform: 'rotate(0deg)', backgroundPosition: [0, 0] },
    '33%': { height: 56, width: 56, backgroundPosition: [300, 0] },
    '50%': { height: 54, width: 54, backgroundPosition: [600, 0] },
    '66%': { height: 52, width: 52, backgroundPosition: [300, 0] },
    '100%': { height: 54, width: 54, transform: 'rotate(360deg)', backgroundPosition: [0, 0] },
  },
  container: {
    zIndex: 200,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: '50%',
    background: 'transparent',
    cursor: 'pointer',
  },
  fullscreenicon: {
    position: 'absolute',
    zIndex: 200,
    height: 52,
    width: 52,
    fill: theme.palette.secondary.dark,
    stroke: theme.palette.secondary.dark,
    strokeWidth: 2,
  },
  glowlayer: {
    position: 'absolute',
    zIndex: 100,
    height: 54,
    width: 54,
    borderRadius: '50%',
    background: 'linear-gradient(160deg,#00ff87,#007fd5,#f69294,#cce260,#05f365,#00ca96,#0d6cb0,#0047ff)',
    filter: 'blur(6px)',
    backgroundSize: '800%',
    opacity: 0.6,
    animationName: '$glow',
    animationDuration: '30s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationPlayState: 'running',
  },
}))

const Fullscreen = ({ setFullscreen }) => {
  const classes = useStyles()
  return (
    <div className={classes.container} onClick={setFullscreen}>
      <svg className={classes.fullscreenicon} version="1.1" id="fscreen">
        <g>
          <path
            d="M26,4c12.1,0,22,9.9,22,22c0,12.1-9.9,22-22,22C13.9,48,4,38.1,4,26C4,13.9,13.9,4,26,4 M26,2L26,2C12.8,2,2,12.8,2,26v0
		c0,13.2,10.8,24,24,24h0c13.2,0,24-10.8,24-24v0C50,12.8,39.2,2,26,2L26,2z"
          />
        </g>
        <polyline points="22.8,16.4 16.4,16.4 16.4,22.8 " />
        <path d="M22.8,22.8" />
        <polyline points="35.6,22.8 35.6,16.4 29.2,16.4 " />
        <path d="M29.2,22.8" />
        <path d="M29.2,29.2" />
        <path d="M29.2,35.6" />
        <path d="M22.8,35.6" />
        <path d="M22.8,29.2" />
        <polyline points="29.2,35.6 35.6,35.6 35.6,29.2 " />
        <path d="M29.2,29.2" />
        <path d="M22.8,29.2" />
        <polyline points="16.4,29.2 16.4,35.6 22.8,35.6 " />
      </svg>

      <div className={classes.glowlayer} />
    </div>
  )
}

export default Fullscreen
