import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200 "
       style={{ backgroundColor: color }}>
        <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
          <div className="flex flex-wrap gap-3 justify-center shadow-xl rounded-lg p-4 bg-white/80 backdrop-blur-sm">
          <button onClick={() => setColor("red")} className="outline-none bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md">Red</button>
          <button onClick={() => setColor("green")} className="outline-none bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 shadow-md">Green</button>
          <button onClick={() => setColor("blue")} className="outline-none bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-md">Blue</button>
          <button onClick={() => setColor("yellow")} className="outline-none bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 shadow-md">Yellow</button>
          <button onClick={() => setColor("purple")} className="outline-none bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 shadow-md">Purple</button>
          <button onClick={() => setColor("pink")} className="outline-none bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 shadow-md">Pink</button>
          <button onClick={() => setColor("indigo")} className="outline-none bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 shadow-md">Indigo</button>
          <button onClick={() => setColor("black")} className="outline-none bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-md">Black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
