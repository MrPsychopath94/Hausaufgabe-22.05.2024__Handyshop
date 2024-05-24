import "./HandyListing.css";
import "./handys"
import Timer from "./timer"

function Listing({ Name, Preis, imageURL, timer }) {
  return (
    <div>
      <Timer style={{color: "black"}}/>
      <img
        src={imageURL}
        alt="Bild"
   
      />
      <h2>Name: {Name}</h2>
      <h2>Preis: €{Preis}</h2>
      <h2>{timer}</h2>
      <div style={{ border: "5px solid grey" }} />
      <div style={{ border: "10px solid white" }} />
    </div>
  );
}

export default Listing;
