import React from "react"
import { InputsContainer } from "./styled"
import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/user"
import { useHistory } from "react-router-dom"

const LoginForm = ({setRightButtonText}) => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, history, setRightButtonText)
  }

  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
        <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <TextField
            name={"nickname"}
            value={form.nickname}
            onChange={onChange}
            label={"Apelido"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            Fazer cadastro
          </Button>
        </form>
      </InputsContainer>
  )
}

export default LoginForm
