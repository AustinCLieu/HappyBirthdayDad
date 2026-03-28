import { useState } from 'react'
import { playWrongSound, playCorrectSound } from '../utils/playWrongSound'

const OPTIONS = ['Uber Ride Share', 'UberX', 'Uber Comfort', 'Uber Black']
const CORRECT = 'Uber Black'

function Question14({ onNext }) {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2>What is the right Uber to take?</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => { setSelected(option); if (option !== CORRECT) playWrongSound(); else playCorrectSound() }}
            style={{
              opacity: selected && selected !== option ? 0.4 : 1,
              outline: selected === option ? '2px solid lime' : 'none',
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {selected && selected !== CORRECT && <p>Wrong! Try again.</p>}
      {selected === CORRECT && (
        <>
          <p>Correct! ...only because it is your birthday.</p>
          <button onClick={onNext}>Next</button>
        </>
      )}
    </div>
  )
}

export default Question14
