import { useState, useEffect } from "react";
import LinkTree from "./component/LinkTree";
import image1 from "/images/img1.jpg";
import image2 from "/images/img2.jpg";
import "./App.css";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Looking For Me?</h1>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Brianna Quintero"
            style={{ display: index === currentImageIndex ? "block" : "none" }} // Only display the current image
          />
        ))}
      </header>
      <LinkTree />
    </div>
  );
}

export default App;
