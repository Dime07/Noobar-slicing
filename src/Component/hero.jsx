import "../CSS/Component.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Hero(){
    //data
    //function handling
    return(
        <div className="Hero">
            <div className="in-hero">
                <h1>Up</h1>
                <div className="categories">
                    <p>Animation</p>
                    <p>Adventure</p>
                    <p>Comedy</p>
                </div>
                <p id="desc">78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.</p>
                <div className="btn-wrap">
                    <input className="btn" type="button" value="Watch" />
                    <div className="btn-love">
                        <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default Hero;