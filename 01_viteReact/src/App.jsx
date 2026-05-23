

import Chai from "./chai"

function App() {
  
  
  const username="Aditya"
  return (
  //  <h1>Chai aur React with vite</h1> //Ek hi element return karna hota hai
  // <Chai/>

  //Method 2 Fragment
  <>
  <h1>Chai aur React with vite || {username}</h1>   // { } is called evaluation brackets, it is used to evaluate JavaScript expressions inside JSX. It allows us to embed dynamic content, such as variables, functions, or any valid JavaScript expression, within our JSX code. In this case, we are using it to display the value of the username variable within the h1 element.
   <Chai/>
  </>
  )
}

export default App
