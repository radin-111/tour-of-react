import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi React</h1>
      <Pet></Pet>
      <Pet></Pet>
      <Pet></Pet>
      <Pet></Pet>
      <Pet></Pet>
      <Pet></Pet>
      <Pet></Pet>


    </>
  )
}

function Pet() {
  return (
    <div>
      <p>Hi this is voda</p>
    </div>

  )
}
export default App
