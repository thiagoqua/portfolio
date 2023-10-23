import { useEffect, useState } from "react";

export default function FallingName() {
  const name = "Thiago Quaglia";
  const delayBase = 0.2;
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
      const interval = setInterval(() => {
          setAnimate(false);  

          setTimeout(() => {
              setAnimate(true);  
          }, 50);  
      }, 6000); 
      
      return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-ctx">
      {Array.from(name).map((letter, index) => (
        letter === ' '
        ? <span key={index}>&nbsp;</span>
        : <span
            key={index}
            className={animate ? "falling-letter" : ""}
            style={{ animationDelay: `${index * delayBase}s` }}
          >
            {letter}
        </span>
      ))}
    </div>
  );
}
