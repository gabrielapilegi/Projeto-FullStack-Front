import { Button } from "@material-ui/core"
import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const MusicsListPage = () => {
  useProtectedPage()
  return (
    <div>
      <h1>MusicsListPage</h1>
      
    </div>
  )
}

export default MusicsListPage