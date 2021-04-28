export const goToLogin = (history) => {
  history.push("/login")
}

export const goToSignUp = (history) => {
  history.push("/cadastro")
}

export const goToAddMusic = (history) => {
  history.push("/adicionar-musica")
}

export const goToMusicDetail = (history, id) => {
  history.push(`/musica/${id}`)
}

export const goToMusicList = (history) => {
  history.push("/")
}

