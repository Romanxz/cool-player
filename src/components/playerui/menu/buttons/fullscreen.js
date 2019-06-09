import React from 'react'
import { Fullscreen as FullscreenEnter, FullscreenExit } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  fullscreen: {
    height: 30,
    width: 30,
    marginRight: 15,
    cursor: 'pointer',
  },
}))

const Fullscreen = ({ setFullscreen, isFullscreen }) => {
  const classes = useStyles()
  return (
    <>
      {isFullscreen ? (
        <FullscreenExit onClick={setFullscreen} color="primary" className={classes.fullscreen} />
      ) : (
        <FullscreenEnter onClick={setFullscreen} color="primary" className={classes.fullscreen} />
      )}
    </>
  )
}

export default Fullscreen
