import { createContext, useState } from 'react'

function App(){
  const [showText,setshowText]=useState(true)
  const [inputText,setinputText]=useState('')
  const [messages,setMessages]=useState([])
  const [step,setStep]=useState(0)

  const sendMessages=()=>{
    if (inputText.trim()==="")
      return;
    else console.log(`${inputText}`)

  }
  return(<>
    <div>
      <button onClick={()=>setshowText(!showText)}>
        切換顯示
      </button>
      {showText?<p>第一個訊息</p>:<p>我切換了</p>}
    </div>
    <div>
<input type="text"
       placeholder='請輸入訊息'
       value={inputText}
       onChange={(e)=>setinputText(e.target.value)} />
<button onClick={()=>sendMessages()}>送出訊息</button>
    
      <p>你輸入的是:{inputText}</p>
      <ul></ul>
     {inputText && <button onClick={()=>setinputText('')}>清除字幕</button>}
    </div>
    <div>
      <p>第{step}步</p>
<button onClick={()=>{setStep(step+1)}}>下一步</button>
<button onClick={()=>{setStep(step-1)}} disabled={step===0}>上一步</button>
    </div>
    </> 
  )
}


export default App
