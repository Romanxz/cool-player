import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: '#ff0000' },
      secondary: { main: '#66209b' },
    },
  })
)

export default theme
