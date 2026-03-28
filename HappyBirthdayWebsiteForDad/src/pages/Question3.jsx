import { useState } from 'react'
import { playWrongSound, playCorrectSound } from '../utils/playWrongSound'

const OPTIONS = ['Mom', 'Dad', 'Austin', 'Brennan']
const CORRECT = 'Brennan'

function Question3({ onNext }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (option) => {
    setSelected(option)
    if (option !== CORRECT) playWrongSound(); else playCorrectSound()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2>Who has the highest score on the Pacman machine?</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {OPTIONS.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            style={{
              opacity: selected && selected !== option ? 0.4 : 1,
              outline: selected === option ? '2px solid lime' : 'none',
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {selected && selected !== CORRECT && (
        <p>Wrong! Try again.</p>
      )}
      {selected === CORRECT && (
        <>
          <p>Correct!</p>
          <button onClick={onNext}>Next</button>
        </>
      )}
    </div>
  )
}

export default Question3
