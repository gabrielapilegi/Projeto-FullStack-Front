export const goToLogin = (history) => {
  history.push("/login")
}

export const goToSignUp = (history) => {
  history.push("/cadastro")
}

export const goToAddMusic = (history) => {
  history.push("/adicionar-musica")
}

export const goToMusicList = (history) => {
  history.push("/")
}


export const goToMusicDetail = (history) => {
  history.push(`/musica/${id}`)
}
