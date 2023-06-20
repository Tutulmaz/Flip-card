import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function Cardinpu(kelimeler, setKelimeler) {
  const [input, setInput] = useState({
    id: 0,
    english: "",
    turkish: "",
    example: "",
  });

  const changeEnglish = (e) => {
    setInput({ ...input, english: e.target.value });
  };
  const changeTurkish = (e) => {
    setInput({ ...input, turkish: e.target.value });
  };
  const changeExample = (e) => {
    setInput({ ...input, id: kelimeler.lenght + 1, example: e.target.value });
  };

  const ekleHandler = (e) => {
    setKelimeler([...kelimeler, input]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        value={input.english}
        onChange={changeEnglish}
        style={{ width: "500px", marginTop: "15px" }}
        id="outlined-basic"
        label="English"
        variant="outlined"
      />
      <TextField
        onChange={changeTurkish}
        value={input.turkish}
        style={{ width: "500px", marginTop: "15px" }}
        id="outlined-basic"
        label="Turkish"
        variant="outlined"
      />
      <TextField
        onChange={changeExample}
        value={input.example}
        style={{ width: "500px", marginTop: "15px" }}
        id="outlined-basic"
        label="Example"
        variant="outlined"
      />
      <Button
        onClick={(e) => ekleHandler()}
        style={{ marginTop: "10px" }}
        variant="contained"
      >
        Add
      </Button>
    </div>
  );
}
