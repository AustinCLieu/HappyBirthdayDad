import { useState } from 'react'

function Question3({ onNext }) {
  const [wrong, setWrong] = useState(false)

  return (
    <div>
      <h2>Are you the best dad in the world?</h2>
      <button onClick={onNext}>Yes</button>
      <button onClick={() => setWrong(true)}>No</button>
      {wrong && <p>Wrong answer! Try again.</p>}
    </div>
  )
}

export default Question3
