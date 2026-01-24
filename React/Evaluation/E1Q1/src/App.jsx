import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './PostsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 style={{color:"white"}}>📱Post Feed</h1>
      <PostsList/>
    </div>
  )
}

export default App
