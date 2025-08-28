import {useState} from 'react';

function App(){
  const [input,setInput]=useState('');
  const [list,setList]=useState([]);

  const handleAdd=()=>{
    if(input.trim()==='')return;
    setList([...list,input]);
    setInput('');
    console.log(list);
    
  }
  return(<>
  <div>
    <input value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    <button onClick={handleAdd} >新增</button>
  </div>
  <ul>
    {list.map((item,i)=>(<li key={i}>{item}</li>))}
  </ul>
  </>
)}

export default App