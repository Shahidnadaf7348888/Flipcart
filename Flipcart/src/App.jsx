import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Home/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>


<script src="path/to/jquery.min.js"></script>
<script src="path/to/owl.carousel.min.js"></script>
<script src="path/to/your/custom-script.js"></script>
   </>
  )
}

export default App
