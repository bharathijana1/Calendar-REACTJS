import { useState } from 'react'
import Calendar from './Components/calendar'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calendar />
    </>
  )
}

export default App
