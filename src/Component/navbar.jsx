import "../CSS/Component.css";
import {Link } from "react-router-dom";

function Navbar(){
    //data
    //function handling
    return(
        <div className="navbar">
            <div className="left-side">
                <p>Noobar</p>
                <ul>
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/series">Tv Series</Link></li>
                </ul>
            </div>
            <div className="right-side">
                <input className="search" type="text" placeholder="Search ..."/>
                <input className="btn" type="button" value="login" />
            </div>
        </div>
    )
}

export default Navbar;