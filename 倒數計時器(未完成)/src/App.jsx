import React,{useState,useEffect,} from "react";
function CountdownTimer(){
  const[timeLeft,setTimeLeft]=useState(10);
  const[showModal,setShowModal]=useState(false);

useEffect(()=>{
  if(timeLeft<=0){
    setShowModal(true);
    return;
  }}
const timer= setInterval(()=>{
  
  setTimeLeft((prew)=>prew-1);
},1000)
if(prew<=0){
return ()=>clearInterval(timer);
}

return (
 <div>
  <h1>時間倒數計時：{timeLeft}</h1>
  {showModal && <div>時間到了！</div>}
 </div>  
);
}
export default CountdownTimer;