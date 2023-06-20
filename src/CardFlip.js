import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "@mui/material";

function CardFlip({ kelime, artir, azalt, sira, kelimeler }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleClick}
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "#F5B041",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20%",
            color: "#212f3D",
          }}
        >
          <h1> {kelime.eng} </h1>
          <h3>"{kelime.example}" </h3>
        </div>

        <div
          onClick={handleClick}
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "#212f3D",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20%",
            color: "#F5B041",
            flexDirection: "column",
          }}
        >
          <h1>{kelime.tr}</h1>
        </div>
      </ReactCardFlip>

      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          onClick={artir}
          disabled={sira > kelimeler.lenght}
          variant="contained"
        >
          Sonraki
        </Button>
        <Button disabled={sira === 1} onClick={azalt} variant="contained">
          Önceki
        </Button>
      </div>
    </div>
  );
}

export default CardFlip;
