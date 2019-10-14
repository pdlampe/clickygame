import React from "react";
import "./Banner.css";
import ImageInventory from "../ImageInventory";

const Banner = () => (
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 offset-md-right-2">
                    <h1>The Sightseeing Game</h1>
                    <h4>Click on each landmark once to earn points.</h4><h4>Don't click on a landmark more than once!</h4>
                </div>
            </div>
        </div>
    </div>
);
export default Banner;