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
  pauseicon: {
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
    background:
      'linear-gradient(45deg, #48ff00, #7a00ff, #ff0000, #002bff, #ff7300, #ff00c8, #fffb00, #00ffd5, #48ff00)',
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

const Pause = ({ onPlayPause }) => {
  const classes = useStyles()
  return (
    <div className={classes.container} onClick={onPlayPause}>
      <svg className={classes.pauseicon} version="1.1" id="pause">
        <g>
          <path
            d="M26,4c12.1,0,22,9.9,22,22c0,12.1-9.9,22-22,22C13.9,48,4,38.1,4,26C4,13.9,13.9,4,26,4 M26,2L26,2C12.8,2,2,12.8,2,26v0
		c0,13.2,10.8,24,24,24h0c13.2,0,24-10.8,24-24v0C50,12.8,39.2,2,26,2L26,2z"
          />
        </g>
        <g>
          <path
            d="M21.4,36.8h-0.8c-0.9,0-1.6-0.7-1.6-1.6V16.8c0-0.9,0.7-1.6,1.6-1.6h0.8c0.9,0,1.6,0.7,1.6,1.6v18.4
		C23,36.1,22.3,36.8,21.4,36.8z"
          />
          <path
            d="M31.4,36.8h-0.8c-0.9,0-1.6-0.7-1.6-1.6V16.8c0-0.9,0.7-1.6,1.6-1.6h0.8c0.9,0,1.6,0.7,1.6,1.6v18.4
		C33,36.1,32.3,36.8,31.4,36.8z"
          />
        </g>
      </svg>
      <div className={classes.glowlayer} />
    </div>
  )
}

export default Pause
