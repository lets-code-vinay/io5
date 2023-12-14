import React from "react";
import dummy from "../../Assets/images/dummy.png";
import "./style.css";

const Offers = (props) => {
  const { offerImages } = props || {};
  console.log("offerImages", offerImages);

  return (
    <div className="offer-images-container">
      {offerImages.length > 0 &&
        offerImages.map((image, index) => {
          return (
            <img
              className="offer-image"
              key={index}
              src={image ? image : dummy}
              alt="offer1"
            />
          );
        })}
    </div>
  );
};

export default Offers;
