import { useEffect, useRef, useState } from "react";
import "../../styles/root.css"

export default function Welcome(){
  const [welcome,setWelcome] = useState<string>("Bienvenid@ a mi portfolio!");
  const [selectMessage,setSelectMessagge] = useState<string>("Seleccione un idioma para continuar.");
  const [key,setKey] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcome(previous => {
        if(previous.startsWith("Bienvenid")){
          setSelectMessagge("Select languge to continue.")
          return "Welcome to my portfolio!";
        }
        else{
          setSelectMessagge("Seleccione un idioma para continuar.")
          return "Bienvenido@ a mi portfolio!";
        }
      });

      setKey(previous => previous + 1);
    },5000);

    return () => clearInterval(interval);
  },[]);

  return (
    <div key={key} className="welcome-ctx">
      <h1 className="welcome">{welcome}</h1>
      <h2 className="welcome">{selectMessage}</h2>
    </div>
  );
}