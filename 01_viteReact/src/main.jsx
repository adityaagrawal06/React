// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'


// function Myapp(){
//   return(
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank',
//     },
//     children:'Click me to visit Google'
// }

const reactElement=React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank'
  }, 
  'Click me to visit Google'
); 

const anotherElement= (
  <a href='https://www.google.com' target='_blank'>Click me to visit Google</a>
)

createRoot(document.getElementById('root')).render(
  
  //  <ReactElement /> //will not occus for 1st as it is a object and not a component, it will throw an error because React expects a component or a string for HTML elements, but here we are passing an object which is not valid. To render this object, we would need to create a custom render function that can handle this type of object and convert it into a valid React element or HTML element.
  // anotherElement //correct
  anotherElement 


)
