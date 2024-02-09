import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Kids from './Components/Kids'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Kids/>
    </>
  )
}

export default App

