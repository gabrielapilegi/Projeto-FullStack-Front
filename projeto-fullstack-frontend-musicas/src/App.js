import { ThemeProvider } from '@material-ui/core/styles'
import './App.css'
import theme from './constants/theme'
import Router from './routes/Router'


const App = () => {
  return (
    <ThemeProvider theme = { theme }>
      <Router/>
    </ThemeProvider>
  )
}

export default App;
