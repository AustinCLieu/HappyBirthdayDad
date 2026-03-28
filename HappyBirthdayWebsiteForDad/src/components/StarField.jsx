import { useEffect, useRef } from 'react'
import galagaShipSrc from '../assets/galagaship2-Picsart-BackgroundRemover.png'

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
    const SHIP_SIZE = 96

    function makeShip(stagger = false) {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 1 + 1.2
      return {
        x: stagger ? Math.random() * canvas.width : (Math.random() < 0.5 ? -SHIP_SIZE : canvas.width + SHIP_SIZE),
        y: stagger ? Math.random() * canvas.height : Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        // direction changes
        changeTimer: Math.floor(Math.random() * 400 + 300),
        t: 0,
      }
    }

    const ships = Array.from({ length: 3 }, () => makeShip(true))

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
          ship.x += ship.vx
          ship.y += ship.vy

          // randomly nudge direction every so often
          if (ship.t % ship.changeTimer === 0) {
            const angle = Math.random() * Math.PI * 2
            const speed = Math.random() * 1 + 1.2
            ship.vx = Math.cos(angle) * speed
            ship.vy = Math.sin(angle) * speed
            ship.changeTimer = Math.floor(Math.random() * 400 + 300)
          }

          // wrap around screen edges
          if (ship.x < -SHIP_SIZE) ship.x = canvas.width + SHIP_SIZE
          if (ship.x > canvas.width + SHIP_SIZE) ship.x = -SHIP_SIZE
          if (ship.y < -SHIP_SIZE) ship.y = canvas.height + SHIP_SIZE
          if (ship.y > canvas.height + SHIP_SIZE) ship.y = -SHIP_SIZE

          ctx.drawImage(shipImg, ship.x - SHIP_SIZE / 2, ship.y - SHIP_SIZE / 2, SHIP_SIZE, SHIP_SIZE)
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
