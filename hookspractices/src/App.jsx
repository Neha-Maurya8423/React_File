import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
  const addValue= ()=>{
       setCounter(counter+1)
  }
  const removeValue= ()=>{
    setCounter(counter-1)
}
  return (

  
    <>
   <h2>React Counter</h2>
   <h3>counter value{counter}</h3>
   <button onClick={addValue}>Add counter{counter}</button>
   <br />
   <button onClick={removeValue}>remove counter{counter}</button>
   </>
  );
}

export default App

