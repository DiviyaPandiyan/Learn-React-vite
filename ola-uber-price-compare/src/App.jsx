import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PriceComparison from './PriceComparison'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PriceComparison />
    </>
  )
}

export default App
