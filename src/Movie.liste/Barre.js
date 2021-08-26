import React from "react";
import MovieCards from "./MovieCards";
import Moviecards2 from "./Moviecards2";
import { useState } from "react";
const Barre = (props) => {
  const [film, setFilm] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setFilm(e.target.value);
        }}
      />
      <button onClick={(e) => {}}>recherche</button>
    </div>
  );
};

export default Barre;
