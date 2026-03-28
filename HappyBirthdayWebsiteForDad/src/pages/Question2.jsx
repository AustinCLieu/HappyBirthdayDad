import { useState, useEffect, useRef } from 'react'
import bondimeme from '../assets/pambondimeme.png'
import grannySfx from '../assets/granny_bed_jumpscare_sound_effectmp3converter.mp3'

const CORRECT_DATE = '1969-03-29'

function Question2({ onNext }) {
  const [answer, setAnswer] = useState('')
  const [jumpscare, setJumpscare] = useState(false)
  const audioRef = useRef(null)

  let message = null
  if (answer !== '' && answer !== CORRECT_DATE) {
    if (answer > CORRECT_DATE) {
      message = "Don't be pesky. We know your real age."
    } else {
      message = "You're not that old!!!"
    }
  }

  const isCorrect = answer === CORRECT_DATE

  const [jumpscareVisible, setJumpscareVisible] = useState(false)

  const handleNext = () => {
    setJumpscare(true)
    audioRef.current.play()
    setTimeout(() => setJumpscareVisible(true), 10)
    setTimeout(() => setJumpscareVisible(false), 3000)
    setTimeout(() => {
      setJumpscare(false)
      onNext()
    }, 4000)
  }

  return (
    <>
      <audio ref={audioRef} src={grannySfx} />
      {jumpscare && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src={bondimeme} alt="bondi meme" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: jumpscareVisible ? 1 : 0, transition: 'opacity 1s' }} />
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <h2>What is your birthday?</h2>
        <input
          type="date"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        {message && <p>{message}</p>}
        {isCorrect && <button onClick={handleNext}>Next</button>}
      </div>
    </>
  )
}

export default Question2
