import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const AddMusicPage = () => {
  useProtectedPage()
  
  return (
    <div>
      <h1>AddMusicPage</h1>
    </div>
  )
}

export default AddMusicPage