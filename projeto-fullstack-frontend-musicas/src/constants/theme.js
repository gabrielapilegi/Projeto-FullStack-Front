import { createMuiTheme } from '@material-ui/core/styles'
import {primaryColor, neutralColor} from "./colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
        primary: neutralColor
    },
    // secondary: {
    //   light: "#",
    //   main: "#",
    //   contrastText: "#ffcc00"
    // }
  }
})

export default theme 