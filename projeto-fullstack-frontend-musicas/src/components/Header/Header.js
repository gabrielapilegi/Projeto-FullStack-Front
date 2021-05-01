import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styled'
import { goToLogin, goToMusicList } from '../../routes/coordinator'
import { useHistory } from "react-router-dom"

const Header = ({rightButtonText, setRightButtonText}) => {
  const history = useHistory()
  const token = localStorage.getItem("token")
  

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    } else {
      goToLogin()
    }
  }

  return (
    <AppBar position="static">
      <StyledToolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6">
          <Button onClick={() => goToMusicList(history)}color="inherit">Music</Button>
        </Typography>
        <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header