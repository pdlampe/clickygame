import React from "react";
import "./Banner.css";

const Banner = () => (
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 offset-md-right-2">
                    <h1>Clicky Game!</h1>
                    <h4>Click on an image to earn points, but don't click on any more than once!</h4>
                </div>
            </div>
        </div>
    </div>
);
export default Banner;