import React from "react";
const MovieCards = (props) => {
  return (
    <div className="Cards center">
      <div className="Over">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="cartetext">
        <h4 className="titre"> {props.titre} </h4>
        <ul>{props.anné}</ul>
        <ul> {props.cathegorie} </ul>
        <ul> {props.limite} </ul>
        <ul> {props.pays} </ul>
        <button> {props.watch} </button>
      </div>
    </div>
  );
};

export default MovieCards;
