import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="bg-dark navbar-dark container-fluid text-center pt-1 pb-1">
        <div className="row">
            <div className="col-md-4">
                <h2><a href="." className="text-white nounderline" id="appname">Clicky Game</a></h2>
            </div>
            <div className={"col-md-4 " + (props.gameStatus == "2" ? " text-danger" : (props.gameStatus == "1" ? " text-success" : " text-info"))}>
                <h3>{props.feedback}</h3>
            </div>
            <div className="col-md-4 text-muted">
                <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
            </div>
        </div>
    </div>
);

export default Navbar;