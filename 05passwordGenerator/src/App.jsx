import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numberallow, setNumberAllow] = useState(false);
  const[charallow, SetCharAllow] = useState(false);
  const[password, setPassword]= useState("");

  //ref hook
  const paswordRef = useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSRUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallow) str+="0123456789"
    if(charallow) str+="!@#$%^&*_=[]{}~'"

    for(let i=1; i <= length; i++){
     let char = Math.floor(Math.random()*str.length+1)
     pass += str.charAt(char)
    }
    
    setPassword(pass)

  }, [length, numberallow, charallow, setPassword])

  const copyPasswordToclipBoard =useCallback(()=>{
    paswordRef.current?.select();
    paswordRef.current?.setSelectionRange(0, 99);
      window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{passwordGenerator()},[length, numberallow, charallow, passwordGenerator])
 return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-white text-center'>Password generator</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
       
        <input
         type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={paswordRef}
        />
      <button
      onClick={copyPasswordToclipBoard}
      className='outline-none bg-blue-700 text-white
      px-1 py-0.5 shrink-0'>Copy</button>
       
       </div>
       <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6} 
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input
             type="checkbox"
             defaultChecked={numberallow}
             id="numberInput"
             onChange={()=>{
              setNumberAllow((prev)=>!prev)
             }}
             />
             <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
                   <input
                    type="checkbox"
                    defaultChecked={charallow}
                    id="characterInput"
                    onChange={()=>{
                       SetCharAllow((prev)=>!prev);
                    }}
                   />
                   <label htmlFor="characterInput">Character</label>
          </div>
       </div>

   </div>
    </>
  )
}

export default App
