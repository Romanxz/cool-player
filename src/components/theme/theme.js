import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: '#23b000' },
      secondary: { main: '#5900b8' },
    },
  })
)

export default theme
