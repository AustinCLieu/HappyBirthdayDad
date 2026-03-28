import { useState } from 'react'

const OPTIONS = [
  { label: 'bar', bottomLeft: false },
  { label: 'restaurant', bottomLeft: false },
  { label: 'law school', bottomLeft: false },
  { label: 'party', bottomLeft: false },
  { label: 'Legal Bar', bottomLeft: true },
]
const CORRECT = 'Legal Bar'

function Question7({ onNext }) {
  const [selected, setSelected] = useState(null)

  const regularOptions = OPTIONS.filter((_, i) => !OPTIONS[i].bottomLeft)
  const hiddenOption = OPTIONS.find((o) => o.bottomLeft)
  const hiddenIndex = OPTIONS.findIndex((o) => o.bottomLeft)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2>Where did you and Mom first meet?</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {OPTIONS.filter((o) => !o.bottomLeft).map((option, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            style={{
              opacity: selected !== null && selected !== i ? 0.4 : 1,
              outline: selected === i ? '2px solid lime' : 'none',
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Hidden "Legal Bar" button in bottom left */}
      <button
        onClick={() => setSelected(hiddenIndex)}
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '16px',
          fontSize: '8px',
          padding: '2px 4px',
          opacity: selected !== null && selected !== hiddenIndex ? 0.4 : 0.6,
          outline: selected === hiddenIndex ? '1px solid lime' : 'none',
        }}
      >
        {hiddenOption.label}
      </button>

      {selected !== null && OPTIONS[selected].label !== CORRECT && <p>Wrong! Try again.</p>}
      {selected !== null && OPTIONS[selected].label === CORRECT && (
        <>
          <p>Correct!</p>
          <button onClick={onNext}>Next</button>
        </>
      )}
    </div>
  )
}

export default Question7
