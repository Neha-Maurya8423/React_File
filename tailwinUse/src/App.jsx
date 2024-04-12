import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwin Test</h2>
    <Card    userName="React" btnText='click me'/>
    <Card  userName="Card2" btnText='visit me'/>
    </>
  )
}

export default App
