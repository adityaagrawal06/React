import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Adity",
    channel: "bored-ape"
  }
  let myArr = [1, 2, 3, 4, 5]
  let arr= [1, 2, 3]
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-500 p-4 rounded-xl">Bg Tailwind</h1>
      <Card channel={myObj.channel} name={myObj.name} myArray={myArr} /> // passing props to card component
      <Card channel="adiiiiii" name="Adityaaaaa" myArray={arr} />
      <Card channel="adiiiiii"  /> //if do not pass a prop then it will have default value in the card component

      
    </>
  )
}

export default App

