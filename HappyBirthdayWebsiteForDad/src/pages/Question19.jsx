import { useState } from 'react'

function Question19({ onNext }) {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2>Was Merrick Garland a good attorney general?</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {['Yes', 'No'].map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            style={{
              opacity: selected && selected !== option ? 0.4 : 1,
              outline: selected === option ? '2px solid lime' : 'none',
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {selected && (
        <>
          <p>We just wanted to see what you would choose.</p>
          <button onClick={onNext}>Next</button>
        </>
      )}
    </div>
  )
}

export default Question19
