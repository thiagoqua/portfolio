import { useEffect, useState } from "react";

export function TechsGallery({ techs }: { techs: string[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    let isMounted: boolean = true;
    const imageUrl:string = `/public/skills/${techs[currentIndex]}.png`;
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % techs.length);
    }, 4000);
    
    if(isMounted) 
      setCurrentImage(imageUrl);

    setKey(key + 1);

    return () => {
      clearInterval(interval);
      isMounted = false;
    };
  }, [techs, currentIndex]);

  console.log(currentImage)
  return currentImage ? 
    <img
      key={key}
      src={currentImage}
      className="tech_image"
      alt={`tech ${currentIndex}`}
    /> : 
    <></>
}
