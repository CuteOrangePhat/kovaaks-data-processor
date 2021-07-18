import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div
            className="flex flex-col flex-navigation justify-between text-center bg-purple-400 shadow-navigation sticky top-0">
            <div className="flex flex-col ">
                <Link className="h-10 leading-10 text-center hover:bg-purple-300" to="/">
                    <i className="fas fa-home"></i>
                </Link>
                <Link className="h-10 leading-10 hover:bg-purple-300" to="/">
                    <i className="fas fa-poll"></i>
                </Link>
                <Link className="h-10 leading-10 hover:bg-purple-300" to="/">
                    <i className="fas fa-chart-bar"></i>
                </Link>
            </div>
            <Link className="h-10 leading-10 hover:bg-purple-300" to="/settings">
                <i className="fas fa-cog"></i>
            </Link>
        </div>
    );
};

export default Navigation;
