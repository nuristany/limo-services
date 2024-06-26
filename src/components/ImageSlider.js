import React, { useState, useEffect } from "react";
import images from "../importImages";
import "../App.css";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once

  // Log the images array for debugging
  console.log("Images:", images);

  // Check if images array is empty or undefined
  if (!images || images.length === 0) {
    return <div>No images found</div>;
  }

  // Log the current image URL for debugging
  console.log("Current Image:", images[currentIndex]);

  return (
    <div className="banner">
      <div className="slider">
        {/* Render the current image */}
        <img src={images[currentIndex]} alt="" id="slidimg" />
      </div>
      {/* Add rest of your component code here */}
    </div>
  );
}

export default ImageSlider;
