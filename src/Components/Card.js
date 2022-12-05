import React from 'react';
import './Card.css';

const Card = (props) => {

  // Select / Unselect a movie 
  const handleClick = (movieName, movieCategory) => {
    props.clickToSelectParent(movieName, movieCategory);
  }

  return (
    <div className={props.status}>
      <p className="card-title">{props.movieName}</p>
      <img src={props.movieUrl} alt={props.movieName} className="card-image"></img>
      <button
        className={props.status === "card-selected" ? "card-selected-button" : "card-button"}
        onClick={() => handleClick(props.movieName, props.movieCategory)}>
        {props.status === "card-selected" ? "Selected!" : "Choose"}
      </button>
    </div>
  )
}

export default Card;