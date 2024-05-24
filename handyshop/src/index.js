import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Listing from "./HandyListing";
import handys from "./handys"

const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(
   <>
      <div className="container" style={{ color: "black" }}>
       {handys.map((handy, index) => (
         <Listing
           key={index} 
           Name={handy.Name} 
           Preis={handy.Preis} 
           imageURL={handy.img}
           timer={handy.timer} 
         ></Listing>
       ))}
     </div>
     </>
 ); 
