import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import getTimeFromSeconds from './timefromseconds'

const useStyles = makeStyles(theme => ({
  time: {
    marginLeft: 15,
    fontFamily: 'Digital7',
    fontSize: 40,
    color: theme.palette.primary.light,
    textShadow: `
      0 0 5px ${theme.palette.primary.light},
      0 0 10px ${theme.palette.primary.light},
      0 0 20px ${theme.palette.primary.light},
      0 0 40px ${theme.palette.primary.main},
      0 0 80px ${theme.palette.primary.main},
      0 0 90px ${theme.palette.primary.main},
      0 0 20px ${theme.palette.primary.main},
      0 0 30px ${theme.palette.primary.main}`,
  },
}))

const Time = ({ played, duration }) => {
  const classes = useStyles()
  return (
    <div>
      <span className={classes.time}>
        {getTimeFromSeconds(played)} / {getTimeFromSeconds(duration)}
      </span>
    </div>
  )
}

export default Time
