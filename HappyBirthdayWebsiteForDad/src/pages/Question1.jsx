import { useState } from 'react'
import { playWrongSound, playCorrectSound } from '../utils/playWrongSound'

function Question1({ onNext }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [suffix, setSuffix] = useState('')

  const [wrong, setWrong] = useState(false)

  const allFilled = firstName.trim() !== '' && lastName.trim() !== '' && suffix !== ''

  function handleNext() {
    const correctName = firstName.trim().toLowerCase() === 'ted' && lastName.trim().toLowerCase() === 'lieu'
    const correctSuffix = suffix === 'THE BEST FATHER IN THE WORLD'
    if (correctName && correctSuffix) {
      playCorrectSound()
      onNext()
    } else {
      setWrong(true)
      playWrongSound()
    }
  }

  return (
    <div>
      <h2>What is your name?</h2>
      <input
        type="text"
        value={firstName}
        onChange={(e) => { setFirstName(e.target.value); setWrong(false) }}
        placeholder="First name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => { setLastName(e.target.value); setWrong(false) }}
        placeholder="Last name"
      />
      <select value={suffix} onChange={(e) => { setSuffix(e.target.value); setWrong(false) }}>
        <option value="">Select a title</option>
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        <option value="Ms.">Ms.</option>
        <option value="Dr.">Dr.</option>
        <option value="Jr.">Jr.</option>
        <option value="Sr.">Sr.</option>
        <option value="THE BEST FATHER IN THE WORLD">THE BEST FATHER IN THE WORLD</option>
      </select>
      {wrong && <p>Wrong answer! Try again.</p>}
      {!wrong && <button onClick={handleNext} disabled={!allFilled}>Next</button>}
    </div>
  )
}

export default Question1
