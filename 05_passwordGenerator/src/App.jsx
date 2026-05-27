import { useState , useCallback, useEffect,useRef} from 'react'


function App() {
  const[length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //hook useRef to create a reference to the input element for the password
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let password = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charAllowed){
      str+="!@#$%^&*()_+"
    }
    if(numberAllowed){
      str+="0123456789"
    }
    for(let i=0;i<length;i++){
      password+=str[Math.floor(Math.random()*str.length)]
    }
    setPassword(password)
  },[length,numberAllowed,charAllowed,setPassword])


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select() // Select the text in the input field
    passwordRef.current?.setSelectionRange(0, 999) // For mobile devices //only selects that much text
    window.navigator.clipboard.writeText(password)

  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
     <div className=" w-full max-w-md mx-auto shadow-md rounded-md px-5 my-30 text-black  bg-gray-800 justify-center  flex flex-col gap-1">
         <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mpx bg-white   text-black font-semibold ">
       
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-5 '
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 '>copy</button>
      </div>
      <div className="flex justify content items-center text-sm gap-x-5  w-full">
        <div className='flex items-center gap-x-2'>
        
          <input 
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='outline-none w-full py-1 px-5 '
          />
          <label className='text-orange-400 my-3'>Length:</label>
          <span className='text-orange-400 my-3'>{length}</span>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed((prev) => !prev)}
          />
          <label className='text-orange-400 my-3'>Numbers</label>
        </div>
        
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => setCharAllowed((prev) => !prev)}
          />
          <label className='text-orange-400 my-3'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App



// useCallback is a React hook that allows you to memoize a function, preventing it from being recreated on every render unless its dependencies change. In this code, the passwordGenerator function is wrapped in useCallback, which means it will only be recreated if any of the dependencies (length, numberAllowed, charAllowed, setPassword) change. This can help improve performance by avoiding unnecessary re-renders and function recreations when the component updates.
//useEffect is a React hook that allows you to perform side effects in function components. In this code, useEffect is used to call the passwordGenerator function whenever any of the dependencies (length, numberAllowed, charAllowed, passwordGenerator) change. This means that whenever the length of the password, the allowed characters, or the password itself changes, the passwordGenerator function will be called to generate a new password based on the current settings.
// useRef is a React hook that allows you to create a mutable reference that persists across renders. In this code, useRef is being used to create a reference to the input element for the password, allowing you to easily access its value or manipulate it directly without causing a re-render of the component. For example, you could use useRef to focus the input field when the component mounts or when a certain action occurs.