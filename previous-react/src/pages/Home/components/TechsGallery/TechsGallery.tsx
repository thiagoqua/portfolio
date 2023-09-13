import { useEffect, useState } from "react"
import './TechsGallery.css'

export function TechsGallery({techs}:{techs:string[]}):JSX.Element{
  const [currentIndex,setCurrentIndex] = useState<number>(0);
  const [currentImage,setCurrentImage] = useState<string|null>(null);
  const [key,setKey] = useState<number>(0);

  useEffect(() => {
    let isMounted:boolean = true;

    import(`../../../../assets/skills/${techs[currentIndex]}.png`)
      .then(image => {
        if(isMounted)
          setCurrentImage(image.default);
      });

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % techs.length);
    },4000);

    setKey(prev => prev + 1);

    return () => {
      clearInterval(interval);
      isMounted = false;
    }
  },[techs,currentIndex]);

  if(currentImage == null)
    return <></>;

  return <img key={key}
              src={currentImage} 
              className="tech_image"
              alt={`tech ${currentIndex}`}/>
}