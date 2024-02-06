import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './Components/Home'
import Headder from './Components/Headder';
import Footer from './Components/Footer';
// import Man from './Components/Man'
// import Women from './Components/Women'
// import Electronic from './Components/Electronic'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Headder/> */}
    <Home/>
    {/* <Man/> */}
    {/* <Women/> */}
    {/* <Electronic/> */}
      <Footer/>
    </>
  )
}

export default App

