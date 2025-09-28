import { useState } from "react";
function Counter(){
  const[count,setCount]=useState(0)

  const increment=()=>setCount(prev=>prev+1)
  const decrement=()=>setCount(prev=>prev===0?0:prev-1)
  const reset=()=>setCount(0)
  const show=count===0?"零":count%2===0?"偶數":"奇數"
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">計數器 App</h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">我是:{show}</h1>

        <div className="text-6xl font-bold text-blue-600 mb-8">{count}</div>

        <div className="space-x-4">
          <button
            onClick={decrement}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -1
          </button>

          <button
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
         onClick={reset} >
            Reset
          </button>

          <button
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          onClick={increment}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
