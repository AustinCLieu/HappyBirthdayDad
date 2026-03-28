import { useState } from 'react'
import StarField from './components/StarField'
import Welcome from './pages/Welcome'
import Question1 from './pages/Question1'
import Question2 from './pages/Question2'
import Question3 from './pages/Question3'
import Question4 from './pages/Question4'
import FinalQuestion from './pages/FinalQuestion'
import FinalPage from './pages/FinalPage'

function App() {
  const [page, setPage] = useState(0)

  return (
    <>
      <StarField />
      {page === 0 && <Welcome onNext={() => setPage(1)} />}
      {page === 1 && <Question1 onNext={() => setPage(2)} />}
      {page === 2 && <Question2 onNext={() => setPage(3)} />}
      {page === 3 && <Question3 onNext={() => setPage(4)} />}
      {page === 4 && <Question4 onNext={() => setPage(5)} />}
      {page === 5 && <FinalQuestion onNext={() => setPage(6)} />}
      {page === 6 && <FinalPage />}
    </>
  )
}

export default App
