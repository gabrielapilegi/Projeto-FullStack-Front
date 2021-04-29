import React from "react";
import {
  LogoImage,
  ScreenContainer,
  SignUpFormContainer,
} from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core"
import { goToSignUp } from "../../routes/coordinator"
import SignUpForm from "./SignUpForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
  useUnprotectedPage()

  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignUpForm/>
      
      <SignUpFormContainer>
        {/* <Button
          // onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Cadastre-se
        </Button> */}
      </SignUpFormContainer>
    </ScreenContainer>
  )
}

export default SignUpPage