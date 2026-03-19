import { useState } from 'react'

const CORRECT_DATE = '1969-03-29'

function Question2({ onNext }) {
  const [answer, setAnswer] = useState('')

  let message = null
  if (answer !== '' && answer !== CORRECT_DATE) {
    if (answer > CORRECT_DATE) {
      message = "Don't be pesky. We know your real age."
    } else {
      message = "You're not that old!!!"
    }
  }

  const isCorrect = answer === CORRECT_DATE

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2>What is your birthday?</h2>
      <input
        type="date"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      {message && <p>{message}</p>}
      {isCorrect && <button onClick={onNext}>Next</button>}
    </div>
  )
}

export default Question2
