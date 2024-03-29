import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    display: 'flex',
    zIndex: -100,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: '#403031',
  },
})

const Root = props => {
  const classes = useStyles()
  return <div className={classes.root}>{props.children}</div>
}

export default Root
