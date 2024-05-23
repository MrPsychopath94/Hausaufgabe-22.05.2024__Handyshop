import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HandyListing from "./HandyListing";
import handys from "./handys";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="container" style={{ color: "black" }}>
      {handys.map((handy, index) => (
        <HandyListing
          key={index} // Unique key for each item
          Name={handy.Name} // Props with correct casing (lowercase first letter)
          Preis={handy.Preis} // Props with correct casing (lowercase first letter)
          imageURL={handy.img} // Prop name for image URL (imageUrl instead of imageURL)
        ></HandyListing>
      ))}
    </div>
  </>
);
