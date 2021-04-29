import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const MusicDetailPage = () => {
  useProtectedPage()
  return (
    <div>
      <h1>MusicDetailPage</h1>
    </div>
  )
}

export default MusicDetailPage