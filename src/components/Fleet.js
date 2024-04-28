import React from "react";
import fleet1 from "../images/fleet1.jpg";
import fleet2 from "../images/fleet2.jpg";

const Fleet = () => {
  return (
    <div className="fleet-container">
      <div className="fleet-title">
        <h1>Our Fleet</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
