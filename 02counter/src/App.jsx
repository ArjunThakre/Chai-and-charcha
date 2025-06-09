import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(15);
 
  //let counter=15;
 
  const addValue = () => {
   console.log("clicked", counter);
   if(counter<20)
   setcounter(counter+1)
   else counter
  }

  const removeValue = () =>{
    // console.log("clicked",counter)
    if(counter>0)
    setcounter(counter-1)
    else counter
  }

  return (
    <>
      <h1>Chai Or React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}
      >Add Value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value{counter}</button>

      <footer>{counter}</footer>
    </>
  )
}

export default App
