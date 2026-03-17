import { useState } from 'react'

function Question1({ onNext }) {
  const [answer, setAnswer] = useState('')

  return (
    <div>
      <h2>What is your name?</h2>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Your name"
      />
      <button onClick={onNext} disabled={answer.trim() === ''}>
        Next
      </button>
    </div>
  )
}

export default Question1
