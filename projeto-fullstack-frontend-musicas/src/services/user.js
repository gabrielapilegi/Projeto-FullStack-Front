import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToMusicList } from "../routes/coordinator"

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear();
      goToMusicList(history)
    })
    .catch((error) => {
      alert("Não foi possível efetuar o login. Tente novamente.")
    })
}

export const signUp = (
  body,
  clear,
  history
) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      goToMusicList(history);
    })
    .catch((error) => {
      alert("Não foi possível cadastrar usuário.")
    })
};
