import { useState } from 'react'
import Welcome from './pages/Welcome'
import Question1 from './pages/Question1'
import Question2 from './pages/Question2'
import Question3 from './pages/Question3'
import FinalPage from './pages/FinalPage'

function App() {
  const [page, setPage] = useState(0)

  if (page === 0) return <Welcome onNext={() => setPage(1)} />
  if (page === 1) return <Question1 onNext={() => setPage(2)} />
  if (page === 2) return <Question2 onNext={() => setPage(3)} />
  if (page === 3) return <Question3 onNext={() => setPage(4)} />
  if (page === 4) return <FinalPage />
}

export default App
