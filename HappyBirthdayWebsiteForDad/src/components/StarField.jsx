import { useEffect, useRef } from 'react'
import galagaShipSrc from '../assets/galagaship.png'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ['white', 'red', 'lime', 'dodgerblue', 'yellow', 'mediumpurple', 'orange']

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 1.5 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      phase: Math.random() * Math.PI * 2,
      flickerSpeed: Math.random() * 0.05 + 0.01,
    }))

    // Galaga ship setup
    const shipImg = new Image()
    shipImg.src = galagaShipSrc
    const SHIP_SIZE = 48

    function makeShip() {
      const side = Math.random() < 0.5 ? 'left' : 'right'
      return {
        // start off-screen on a random side
        x: side === 'left' ? -SHIP_SIZE : canvas.width + SHIP_SIZE,
        y: Math.random() * canvas.height * 0.6 + canvas.height * 0.1,
        speedX: side === 'left' ? (Math.random() * 2 + 2) : -(Math.random() * 2 + 2),
        // vertical oscillation (sine wave swoop)
        amplitude: Math.random() * 80 + 40,
        frequency: Math.random() * 0.03 + 0.02,
        phase: Math.random() * Math.PI * 2,
        t: 0,
        baseY: 0, // set after creation
      }
    }

    const ships = Array.from({ length: 3 }, () => {
      const s = makeShip()
      // stagger starting positions so they don't all appear at once
      s.x = Math.random() * canvas.width
      s.baseY = s.y
      return s
    })

    let animFrameId
    let time = 0

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time++

      // Draw stars
      for (const star of stars) {
        const opacity = (Math.sin(time * star.flickerSpeed + star.phase) + 1) / 2
        ctx.globalAlpha = opacity
        ctx.fillStyle = star.color
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      // Draw galaga ships
      if (shipImg.complete) {
        for (const ship of ships) {
          ship.t++
          ship.x += ship.speedX
          ship.y = ship.baseY + Math.sin(ship.t * ship.frequency + ship.phase) * ship.amplitude

          // flip horizontally if moving left
          ctx.save()
          ctx.translate(ship.x, ship.y)
          if (ship.speedX < 0) {
            ctx.scale(-1, 1)
          }
          ctx.drawImage(shipImg, -SHIP_SIZE / 2, -SHIP_SIZE / 2, SHIP_SIZE, SHIP_SIZE)
          ctx.restore()

          // reset when off screen
          if (ship.x < -SHIP_SIZE * 2 || ship.x > canvas.width + SHIP_SIZE * 2) {
            const fresh = makeShip()
            ship.x = fresh.x
            ship.y = fresh.y
            ship.baseY = fresh.y
            ship.speedX = fresh.speedX
            ship.amplitude = fresh.amplitude
            ship.frequency = fresh.frequency
            ship.phase = fresh.phase
            ship.t = 0
          }
        }
      }

      animFrameId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
