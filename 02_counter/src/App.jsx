import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


  //Hooks k use se hum state ko manage kar sakte hai functional component me
  //Mainly hooks ek baar me har jagah ui ko connect karne ke liye use hote hai
  //fastly react krta h to update the ui when we change the state of the component
   function App() {

    let [counter, setCounter] = useState(15); //default value of counter 

    // let counter=5;
    const addValue=()=>{
      // counter=counter+1;
      if(counter<20){
        setCounter(counter+1);
      }
      console.log(counter);
    }
    return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>


      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/> 
      <button
      onClick={()=>{if(counter>0){
        setCounter(counter-1);
      }
      console.log(counter);
      }}
    >remove Value {counter}</button>
    </>
  )
}


export default App
