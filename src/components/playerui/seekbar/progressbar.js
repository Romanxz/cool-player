import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  played: {
    position: 'absolute',
    zIndex: 90,
    background: theme.palette.primary.main,
    height: 2,
    top: -2,
    width: '100%',
    transition: 'all 0.1s ease',
  },
  loaded: {
    position: 'absolute',
    zIndex: 89,
    background: theme.palette.secondary.dark,
    height: 2,
    top: -2,
    width: '100%',
    transition: 'all 0.1s ease',
  },
  none: {
    position: 'absolute',
    zIndex: 88,
    background: theme.palette.secondary.light,
    height: 2,
    top: -2,
    width: '100%',
    transition: 'all 0.1s ease',
  },
}))

const normalize = (value, max) => (value * 100) / max

const Progressbar = ({ played, loaded, duration, isMouseOver }) => {
  const classes = useStyles()
  return (
    <>
      <div
        className={classes.played}
        style={{
          height: isMouseOver ? 4 : 2,
          top: isMouseOver ? -4 : -2,
          width: `${normalize(played, duration)}%`,
        }}
      />
      <div
        className={classes.loaded}
        style={{
          height: isMouseOver ? 4 : 2,
          top: isMouseOver ? -4 : -2,
          width: `${normalize(loaded, duration)}%`,
        }}
      />
      <div className={classes.none} style={{ height: isMouseOver ? 4 : 2, top: isMouseOver ? -4 : -2 }} />
    </>
  )
}

export default Progressbar
