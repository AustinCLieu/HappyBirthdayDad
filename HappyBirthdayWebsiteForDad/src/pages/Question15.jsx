import { useState } from 'react'
import { playWrongSound, playCorrectSound } from '../utils/playWrongSound'

const OPTIONS = [
  'Because he bought a cheap used bike',
  'Because he didn\'t take Uber Black',
  'Because his head is too big from his intelligence',
  'All of the above',
]
const CORRECT = 'All of the above'

function Question15({ onNext }) {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2>Why did Brennan injure himself on the bike?</h2>
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

export default Question15
