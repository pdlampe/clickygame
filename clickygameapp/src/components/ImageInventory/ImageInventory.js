import React from "react";
//import "./ImageInventory.css";
import ImageBlock from "../ImageBlock";

const ImageInventory = (props) => (
    <div className="container">
        <div className="row">
            {props.imageNames.map((imageName, index) => {
                return <ImageBlock key={index} imageName={imageName} alt={imageName} clickHandler={props.clickHandler} gameStatus={props.gameStatus} />
            })}
        </div>
    </div>
);

export default ImageInventory;