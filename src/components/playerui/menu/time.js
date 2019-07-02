import React from 'react'
import { Typography } from '@material-ui/core'
import getTimeFromSeconds from '../timefromseconds'

const Time = ({ played, duration }) => {
  return (
    <>
      <Typography style={{ marginLeft: 15 }} variant="button" color="secondary">
        {getTimeFromSeconds(played)} / {getTimeFromSeconds(duration)}
      </Typography>
    </>
  )
}

export default Time
