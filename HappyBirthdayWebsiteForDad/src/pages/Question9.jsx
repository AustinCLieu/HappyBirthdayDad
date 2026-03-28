import { useState } from 'react'

const LEFT = [
  'Mechanical, Energy, and Aerospace Engineering',
  'Aerospace, Energy, and Mechanical Engineering',
  'Energy, Mechanical, and Aerospace Engineering', // correct — middle of left
  'Energy, Aerospace, and Mechanical Engineering',
  'Mechanical, Aerospace, and Energy Engineering',
  'Aerospace, Mechanical, and Energy Engineering',
]

const MIDDLE = [
  'Energy, Materials, and Aerospace Engineering',
  'Energy, Aerospace, and Materials Engineering',
  'Materials, Energy, and Aerospace Engineering',
  'Materials, Aerospace, and Energy Engineering',
  'Aerospace, Energy, and Materials Engineering',
  'Aerospace, Materials, and Energy Engineering',
]

const RIGHT = [
  'Materials, Mechanical, and Aerospace Engineering',
  'Materials, Aerospace, and Mechanical Engineering',
  'Mechanical, Materials, and Aerospace Engineering',
  'Mechanical, Aerospace, and Materials Engineering',
  'Aerospace, Materials, and Mechanical Engineering',
  'Aerospace, Mechanical, and Materials Engineering',
]

const CORRECT = 'Energy, Mechanical, and Aerospace Engineering'

function Column({ options, selected, onSelect }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          style={{
            opacity: selected && selected !== option ? 0.4 : 1,
            outline: selected === option ? '2px solid lime' : 'none',
            fontSize: '14px',
            padding: '6px 8px',
            whiteSpace: 'normal',
            maxWidth: '260px',
            wordBreak: 'break-word',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

function Question9({ onNext }) {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h2>What is Brennan's major?</h2>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <Column options={LEFT} selected={selected} onSelect={setSelected} />
        <Column options={MIDDLE} selected={selected} onSelect={setSelected} />
        <Column options={RIGHT} selected={selected} onSelect={setSelected} />
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

export default Question9
