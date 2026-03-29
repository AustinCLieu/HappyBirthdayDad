import { useEffect, useRef } from 'react'
import happyBirthday from '../assets/the_mountain-happy-birthday-508020.mp3'

function FinalPage() {
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current.play()
  }, [])

  return (
    <div>
      <audio ref={audioRef} src={happyBirthday} />
      <h1>You passed! Happy Birthday Dad!</h1>
      <p>From Mom, Brennan, and Austin</p>
    </div>
  )
}

export default FinalPage
