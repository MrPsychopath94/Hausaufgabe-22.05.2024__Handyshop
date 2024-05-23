import "./HandyListing.css";
import "./handys"

function Listing({ Name, Preis, imageURL }) {
  return (
    <div>
      <img
        src={imageURL}
        alt="Bild"
   
      />
      <h2>Name: {Name}</h2>
      <h2>Preis: €{Preis}</h2>
      <div style={{ border: "5px solid grey" }} />
      <div style={{ border: "10px solid white" }} />
    </div>
  );
}

export default Listing;
