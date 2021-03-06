import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="bg-primary navbar-dark container-fluid text-center pt-1 pb-1">
        <div className="row">
            <div className="col-md-4">
                <h2><a href="." className="text-white nounderline" id="appname">The Siteseeing Game</a></h2>
            </div>
            <div className={"col-md-4 " + (props.gameStatus == "2" ? " text-danger" : (props.gameStatus == "1" ? " text-warning" : " text-warning"))}>
                <h3>{props.feedback}</h3>
            </div>
            <div className="col-md-4 text-white nounderline">
                <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
            </div>
        </div>
    </div>
);

export default Navbar;