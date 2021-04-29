import React from "react";
import {
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core"
import LoginForm from "./LoginForm"
import { goToSignUp } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
  useUnprotectedPage()

  const history = useHistory()
 
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <LoginForm/>
      
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage
