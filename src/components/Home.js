import React from "react";
import ImageSlider from "./ImageSlider"; // Import the ImageSlider component
import images from "../importImages"; // Import the images array

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-image">
        {/* <img src={limo} alt="Limo" /> */}
        <ImageSlider images={images} /> {/* Pass the images array as props */}
        
      </div>
      <div className="homepage-text">
        <div className="text-left">
          <h1>LUXURY LIMOUSINES</h1>
          <p>10% OFF ANY RESERVATION WEEKENDS OR WEEKDAYS</p>
        </div>
        <div className="text-right">
          <h1>THE BEST PLACE FOR FINDING LIMO SERVICES AND RENTALS</h1>
          <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
