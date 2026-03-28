import { useState } from 'react'
import { playWrongSound, playCorrectSound } from '../utils/playWrongSound'

const OPTIONS = ['9', '10', '11', '12']
const CORRECT = '10'

function Question8({ onNext }) {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2>How old is Abbot?</h2>
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

export default Question8
