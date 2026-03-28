import { useState } from 'react'
import { playWrongSound, playCorrectSound } from '../utils/playWrongSound'

const OPTIONS = ['Alaska Cruise', 'Scandinavia Cruise', 'Jeju Island', 'Seattle Olympic National Park']
const CORRECT = 'Alaska Cruise'

function Question21({ onNext }) {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2>What did we do for your and Mom's 15th wedding anniversary?</h2>
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
          <p>Correct!</p>
          <button onClick={onNext}>Next</button>
        </>
      )}
    </div>
  )
}

export default Question21
