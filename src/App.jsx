import { useState } from 'react'
import "./App.css"
import Head from './components/Head'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
      <Head/>
      <Body/>
      
      
      {
        
      }
    </>
  )
}

export default App
