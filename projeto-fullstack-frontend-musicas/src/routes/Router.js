import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AddMusicPage from "../pages/AddMusicPage/AddMusicPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import MusicsListPage from "../pages/MusicsListPage/MusicsListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import MusicDetailPage from "../pages/MusicDetailPage/MusicDetailPage"
import Header from "../components/Header/Header"

const Router = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage/>
        </Route>
        <Route exact path="/adicionar-musica">
          <AddMusicPage/>
        </Route>
        <Route exact path="/">
          <MusicsListPage/>
        </Route>
        <Route exact path="/musica/:id">
          <MusicDetailPage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  )

}

export default Router