const getTimeFromSeconds = totalSeconds => {
  const hours = Math.floor(totalSeconds / 3600)
  const rest = totalSeconds % 3600
  const minutes = Math.floor(rest / 60)
  const seconds = rest % 60
  const timestring = `${hours}:${minutes}:${seconds}`
  return timestring
}

export default getTimeFromSeconds
