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
  playicon: {
    position: 'absolute',
    zIndex: 200,
    height: 52,
    width: 52,
    fill: theme.palette.primary.main,
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
      'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
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

const Play = ({ onPlayPause }) => {
  const classes = useStyles()
  return (
    <div className={classes.container} onClick={onPlayPause}>
      <svg className={classes.playicon} version="1.1" id="play">
        <g>
          <path
            d="M26,4c12.1,0,22,9.9,22,22c0,12.1-9.9,22-22,22C13.9,48,4,38.1,4,26C4,13.9,13.9,4,26,4 M26,2L26,2C12.8,2,2,12.8,2,26v0
		c0,13.2,10.8,24,24,24h0c13.2,0,24-10.8,24-24v0C50,12.8,39.2,2,26,2L26,2z"
          />
        </g>
        <g>
          <path
            d="M18.9,14.6c0.4,0,0.8,0.2,1.3,0.4L37.8,25c0.8,0.4,1.1,0.9,1.1,1.2c0,0.3-0.4,0.8-1.1,1.2l-17.6,9.9
		c-0.5,0.3-0.9,0.4-1.3,0.4c-0.8,0-0.9-1.1-0.9-1.7V16.3C18,15.7,18.1,14.6,18.9,14.6 M18.9,12.6c-1.7,0-2.9,1.4-2.9,3.7V36
		c0,2.4,1.2,3.7,2.9,3.7c0.7,0,1.5-0.2,2.3-0.7l17.6-9.9c2.9-1.6,2.9-4.3,0-5.9l-17.6-9.9C20.4,12.8,19.6,12.6,18.9,12.6L18.9,12.6z
		"
          />
        </g>
      </svg>
      <div className={classes.glowlayer} />
    </div>
  )
}

export default Play
