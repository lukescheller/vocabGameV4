import ws from "../Shakespeare-s_family_circle.jpg";
import ws2 from "../Gilbert_WShakespeares_Plays.jpg";

let stylezSheet = {
  border: "1px solid black",
  width: "18rem",
  height: "325px",
  margin: "5px",
  padding: "2.5px",
  opacity: "70%",
};

let flexDiv = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  backgroundImage: `url(${ws2})`,
  backgroundSize: "cover", // or 'contain', or specific pixel/percentage values
  backgroundRepeat: "no-repeat",
  width: "100%", // or any desired width like '500px'
  height: "725px", // set a height to make the background visible
};

export { stylezSheet, flexDiv };
