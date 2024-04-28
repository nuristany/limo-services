import React from "react";
import fleet1 from "../images/fleet1.jpg";
import fleet2 from "../images/fleet2.jpg";

const Fleet = () => {
  return (
    <div className="fleet-container">
      <div className="fleet-title">
        <h1>Our Fleet</h1>
        <p>
          At Ryan Transportation Services . we maintain a fleet Of luxurious and
          well-maintained vehicles, including sedans. SUVs. limousines. and
          more. Our vehicles are equipped with all the latest amenities to
          ensure your comfort and safety.
        </p>
      </div>
      <div className="fleet-images">
        <p>Our Fleet in Action</p>
        <img src={fleet1} alt="fleet1" />
      </div>
      <div className="fleet-images">
        <p>Our Fleet in Action</p>
        <img src={fleet2} alt="fleet2" />
      </div>
    </div>
  );
};

export default Fleet;
