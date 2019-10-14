import React from "react";
import "./ImageBlock.css";

const ImageBlock = (props) => (
    <img className={"col-md-3 col-sm-4 col-xs-12 pb-4 imageBlock rounded " + (props.gameStatus == "2" ? " gameLost" : (props.gameStatus == "1" ? " gameWon" : ""))} src={process.env.PUBLIC_URL + "/images/" + props.imageName} alt={props.alt} height={props.imageBlockHeight} width={props.imageBlockWidth} onClick={props.clickHandler} />
);

export default ImageBlock;