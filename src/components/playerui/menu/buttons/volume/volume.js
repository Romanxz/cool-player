import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  '@keyframes glow': {
    '0%': { height: 54, width: 54, backgroundPosition: [600, 0] },
    '33%': { height: 56, width: 56, backgroundPosition: [300, 0] },
    '50%': { height: 54, width: 54, backgroundPosition: [0, 0] },
    '66%': { height: 52, width: 52, backgroundPosition: [300, 0] },
    '100%': { height: 54, width: 54, backgroundPosition: [600, 0] },
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
  volumeicon: {
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
    background: 'linear-gradient(201deg,#ff0000,#e426c0,#7f98bb,#28dcd2,#53ffa9,#95ff36,#ffe82d,#ff4913)',
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

const Play = ({ toggleMuted }) => {
  const classes = useStyles()
  return (
    <div className={classes.container} onClick={toggleMuted}>
      <svg className={classes.volumeicon} version="1.1" id="volume">
        <g>
          <path
            d="M26,4c12.1,0,22,9.9,22,22c0,12.1-9.9,22-22,22C13.9,48,4,38.1,4,26C4,13.9,13.9,4,26,4 M26,2L26,2C12.8,2,2,12.8,2,26v0
		c0,13.2,10.8,24,24,24h0c13.2,0,24-10.8,24-24v0C50,12.8,39.2,2,26,2L26,2z"
          />
        </g>
        <path
          d="M16.2,28.5h-3c-0.4,0-0.8-0.4-0.8-0.8v-4.2c0-0.4,0.4-0.8,0.8-0.8h3c0.4,0,0.8,0.4,0.8,0.8v4.2
	C17.1,28.1,16.7,28.5,16.2,28.5z"
        />
        <path
          d="M13.2,25.9l8.9,9.5c0.3,0.3,0.9,0.1,0.9-0.3v-19c0-0.5-0.6-0.7-0.9-0.3l-8.9,9.5C13.1,25.4,13.1,25.7,13.2,25.9
	z"
        />
        <path d="M13.9,25.1" />
        <path
          style={{ fill: 'transparent' }}
          d="M26.7,16.7c0.7-0.2,1.4-0.3,2.1-0.3c5.1,0,9.2,4.3,9.2,9.5s-4.1,9.5-9.2,9.5c-0.7,0-1.5-0.1-2.1-0.3"
        />
        <path
          style={{ fill: 'transparent' }}
          d="M26.2,39c0.8,0.1,1.5,0.2,2.3,0.2c7.1,0,12.8-6,12.8-13.3c0-7.4-5.7-13.3-12.8-13.3c-0.8,0-1.6,0.1-2.3,0.2"
        />
        <path
          style={{ fill: 'transparent' }}
          d="M27.3,31c0.5,0.2,1.1,0.3,1.8,0.3c2.9,0,5.2-2.4,5.2-5.4c0-3-2.3-5.4-5.2-5.4c-0.6,0-1.2,0.1-1.8,0.3"
        />
      </svg>
      <div className={classes.glowlayer} />
    </div>
  )
}

export default Play
