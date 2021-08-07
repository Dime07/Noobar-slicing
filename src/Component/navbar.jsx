import "../CSS/Component.css";

function Navbar(){
    //data
    //function handling
    return(
        <div className="navbar">
            <div className="left-side">
                <p>Noobar</p>
                <ul>
                    <li><a href="/">All</a></li>
                    <li><a href="/">Movies</a></li>
                    <li><a href="/">Tv Series</a></li>
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