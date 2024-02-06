import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Man from './Components/Man'
import Women from './Components/Women'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    {/* <Man/> */}
    <Women/>

    </>
  )
}

export default App

