import { useState, useEffect } from 'react'
import bruh from '../assets/bruh.jpg'
import bruhSound from '../assets/bruh.mp3'

function Question3({ onNext }) {
  const [showBruh, setShowBruh] = useState(false)
  const [bruhVisible, setBruhVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(true)

  function handleNo() {
    new Audio(bruhSound).play()
    setButtonsVisible(false)
    setShowBruh(true)
    setTimeout(() => setBruhVisible(true), 10)
    setTimeout(() => setBruhVisible(false), 3000)
    setTimeout(() => setShowBruh(false), 4000)
    setTimeout(() => setButtonsVisible(true), 4000)
  }

  return (
    <div>
      <h2>Are you the best dad in the world?</h2>

      <div style={{ opacity: buttonsVisible ? 1 : 0, transition: 'opacity 0.5s', pointerEvents: buttonsVisible ? 'auto' : 'none' }}>
        <button onClick={onNext}>Yes</button>
        <button onClick={handleNo}>No</button>
      </div>

      {showBruh && (
        <img
          src={bruh}
          alt="bruh"
          style={{ opacity: bruhVisible ? 1 : 0, transition: 'opacity 1s' }}
        />
      )}
    </div>
  )
}

export default Question3
