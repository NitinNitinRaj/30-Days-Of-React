import { useState } from "react";

export default function MouseEventGame() {
  const [corY, setCorY] = useState(0);
  const [corX, setCorX] = useState(0);
  const boxStyle = {
    position: "absolute",
    top: `${corY}px`,
    left: `${corX}px`,
    width: "250px",
    height: "25px",
    padding: "10px",
    background: "lightblue",
    display: "flex",
    fontSize: "x-large",
    justifyContent: "center",
  };
  return (
    <div style={{ position: "relative", width: "100vw" }}>
      <div
        onMouseEnter={(e) => {
          setCorY(Math.floor(Math.random() * 500));
          setCorX(Math.floor(Math.random() * 1000));
        }}
        style={boxStyle}
      >
        30 Days of React
      </div>
    </div>
  );
}
