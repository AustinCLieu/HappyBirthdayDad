import { useState } from 'react'

function Question2({ onNext }) {
  const [answer, setAnswer] = useState('')

  return (
    <div>
      <h2>What is your birthday?</h2>
      <input
        type="date"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={onNext} disabled={answer === ''}>
        Next
      </button>
    </div>
  )
}

export default Question2
