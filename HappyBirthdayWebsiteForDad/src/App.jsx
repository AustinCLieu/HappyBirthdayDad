import { useState } from 'react'
import StarField from './components/StarField'
import Welcome from './pages/Welcome'
import Question1 from './pages/Question1'
import Question2 from './pages/Question2'
import Question3 from './pages/Question3'
import Question4 from './pages/Question4'
import Question5 from './pages/Question5'
import Question6 from './pages/Question6'
import Question7 from './pages/Question7'
import Question8 from './pages/Question8'
import Question9 from './pages/Question9'
import Question10 from './pages/Question10'
import Question11 from './pages/Question11'
import Question12 from './pages/Question12'
import Question13 from './pages/Question13'
import Question14 from './pages/Question14'
import Question15 from './pages/Question15'
import Question16 from './pages/Question16'
import Question17 from './pages/Question17'
import Question18 from './pages/Question18'
import Question19 from './pages/Question19'
import Question20 from './pages/Question20'
import Question21 from './pages/Question21'
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
      {page === 5 && <Question5 onNext={() => setPage(6)} />}
      {page === 6 && <Question6 onNext={() => setPage(7)} />}
      {page === 7 && <Question7 onNext={() => setPage(8)} />}
      {page === 8 && <Question8 onNext={() => setPage(9)} />}
      {page === 9 && <Question9 onNext={() => setPage(10)} />}
      {page === 10 && <Question10 onNext={() => setPage(11)} />}
      {page === 11 && <Question11 onNext={() => setPage(12)} />}
      {page === 12 && <Question12 onNext={() => setPage(13)} />}
      {page === 13 && <Question13 onNext={() => setPage(14)} />}
      {page === 14 && <Question14 onNext={() => setPage(15)} />}
      {page === 15 && <Question15 onNext={() => setPage(16)} />}
      {page === 16 && <Question16 onNext={() => setPage(17)} />}
      {page === 17 && <Question17 onNext={() => setPage(18)} />}
      {page === 18 && <Question18 onNext={() => setPage(19)} />}
      {page === 19 && <Question19 onNext={() => setPage(20)} />}
      {page === 20 && <Question20 onNext={() => setPage(21)} />}
      {page === 21 && <Question21 onNext={() => setPage(22)} />}
      {page === 22 && <FinalQuestion onNext={() => setPage(23)} />}
      {page === 23 && <FinalPage />}
    </>
  )
}

export default App
