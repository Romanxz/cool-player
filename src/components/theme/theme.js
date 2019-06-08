import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: '#ff0000' },
      secondary: { main: '#d41bf9' },
    },
  })
)

export default theme
