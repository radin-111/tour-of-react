import { Suspense, useState } from 'react'
import Users from './Users'
import './App.css'
// import User from './User'

// import User from './user'
const fetchData = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Suspense>
        <Users fetchData={fetchData}>


        </Users>
      </Suspense>



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
