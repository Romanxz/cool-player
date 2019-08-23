import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: '#69f0c7' },
      secondary: { main: '#37015c' },
    },
  })
)

export default theme

// palette: {
//   primary: { main: '#23b000' }, светлозелёный
//   secondary: { main: '#5900b8' }, среднефиолетовосиний
// },

// palette: {
//   primary: { main: '#23b000' }, светлозелёный
//   secondary: { main: '#5000a6' }, тёмнофиолетовосиний
// },

// palette: {
//   primary: { main: '#69f0c7' }, светлоголубой
//   secondary: { main: '#37015c' }, оченьтёмнофиолетовый
