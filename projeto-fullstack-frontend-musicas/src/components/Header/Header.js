import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styled'
import { goToLogin, goToMusicList } from '../../routes/coordinator'
import { useHistory } from "react-router-dom"


const Header = () => {

  const history = useHistory()

  return (
    <AppBar position="static">
      <StyledToolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6">
          <Button onClick={() => goToMusicList(history)}color="inherit">Music</Button>
        </Typography>
        <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header