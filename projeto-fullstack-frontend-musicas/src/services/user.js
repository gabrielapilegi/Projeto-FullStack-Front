import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToMusicList } from "../routes/coordinator"

export const login = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear();
      goToMusicList(history)
      setRightButtonText("Logout")
    })
    .catch((error) => {
      alert(error.response.data.error)
      console.log(error.response.data)
  })
}

export const signUp = (
  body,
  clear,
  history,
  setRightButtonText
) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToMusicList(history)
      setRightButtonText("Logout")
    })
    .catch((error) => {
      alert(error.response.data.error)
  })
};
