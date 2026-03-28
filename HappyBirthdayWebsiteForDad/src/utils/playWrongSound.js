import buzzer from '../assets/wrong-answer-buzzer.mp3'
import trump from '../assets/donald-trump-wrong-sound-effect.mp3'
import correct from '../assets/plankton-correct.mp3'

const wrongSounds = [buzzer, trump]

export function playWrongSound() {
  const src = wrongSounds[Math.floor(Math.random() * wrongSounds.length)]
  new Audio(src).play()
}

export function playCorrectSound() {
  new Audio(correct).play()
}
