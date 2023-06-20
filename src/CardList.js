import React, { useState } from "react";
import Cardinpu from "./Cardinpu";
import CardFlip from "./CardFlip";
import { Button } from "@mui/material";

export default function CardList() {
  const [kelimeler, setKelimeler] = useState([
    {
      id: 1,
      eng: "bring",
      tr: "getirmek",
      example: "Biring it",
    },
    {
      id: 2,
      eng: "go",
      tr: "gitmek",
      example: "Go home",
    },
    {
      id: 3,
      eng: "find",
      tr: "bulmak",
      example: "find it",
    },
  ]);

  const [islem, setIslem] = useState(false);

  const kelimeKarti = () => {
    setIslem(true);
  };
  const kelimeEkle = () => {
    setIslem(false);
  };

  const [sira, setSira] = useState(1);

  const artir = () => {
    setSira((prevstate) => prevstate + 1);
  };

  const azalt = () => {
    setSira((prevstate) => prevstate - 1);
  };

  return (
    <div>
      <div
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          marginBottom: "20px",
        }}
      >
        <Button onClick={kelimeKarti} variant="contained" color="secondary">
          Kelime Kartları
        </Button>
        <Button onClick={kelimeEkle} variant="contained" color="secondary">
          Kelime Ekle
        </Button>
      </div>

      {islem ? (
        kelimeler.map((kelime) => {
          if (kelime.id === sira) {
            return (
              <CardFlip
                key={kelime.id}
                kelime={kelime}
                azalt={azalt}
                artir={artir}
                sira={sira}
                kelimeler={kelimeler}
              />
            );
          }
        })
      ) : (
        <Cardinpu kelimeler={kelimeler} setKelimeler={setKelimeler} />
      )}
    </div>
  );
}
