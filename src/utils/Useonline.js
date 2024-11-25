import { useState } from "react"

const useOnline =  ()=>{
    const [onlineStatus,setOnlineStatus]=useState(navigator.onLine);

  window.addEventListener('online',(e)=>{
       setOnlineStatus(true)
  })

  window.addEventListener('offline',(e)=>{
    setOnlineStatus(false)
  });
 return onlineStatus
}
export default useOnline 