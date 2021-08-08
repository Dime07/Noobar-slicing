import "../CSS/Component.css";
import React from 'react';
import Rating from "react-rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Card({data}){
    //data
    //funct handling
    return(
        <div className="card-section">
            <div className="top">
                <div className="dropdown">
                    <select name="Categories" id="">
                        <option value="0">All</option>
                        <option value="1">Movies</option>
                        <option value="2">TV Series</option>
                    </select>
                </div>
                <p>See more..</p>
            </div>

            <div className="card-wrap">
            {data.map((film) => (
                <div className="Card">
                    <img src={film.url} alt="" className="poster"/>

                    <h2>{film.judul}</h2>
                    <div className="categories-card">
                        <p>{film.cat1}</p>
                        <p>{film.cat2}</p>
                        <p>{film.cat3}</p>
                    </div>
                    <div className="bottom">
                        <Rating 
                        initialRating = {film.rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} style={{color : "white"}} />}
                        fullSymbol = {<FontAwesomeIcon icon={faStar} style={{color : "#FBFF22"}} />}
                        />
                        <input className="btn" type="button" value="Watch" />
                    </div>
                </div>    
            ))}
            </div>
        </div>
    )
}

export default Card;