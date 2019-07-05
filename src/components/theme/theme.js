import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: '#23b000' },
      secondary: { main: '#5000a6' },
    },
  })
)

export default theme

// palette: {
//   primary: { main: '#23b000' }, светлозелёный
//   secondary: { main: '#5900b8' }, среднефиолетовосиний
// },
