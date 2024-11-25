import { useEffect, useState } from "react";
import { Menu_Api } from "./Constant";

const useMenu = (id) => {
  const [resInfo, setResInfo] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const jsonD = await fetch(`${Menu_Api}${id}`);
      const API_DATA = await jsonD.json()
    
      
      setResInfo(API_DATA);
    } catch {}
  };
  return resInfo;
}

export default useMenu