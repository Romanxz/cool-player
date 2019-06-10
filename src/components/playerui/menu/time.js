import React from 'react'
import { Typography } from '@material-ui/core'

const getTimeFromSeconds = totalSeconds => {
  const hours = Math.floor(totalSeconds / 3600)
  const rest = totalSeconds % 3600
  const minutes = Math.floor(rest / 60)
  const seconds = rest % 60
  const timestring = `${hours}:${minutes}:${seconds}`
  return timestring
}

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
