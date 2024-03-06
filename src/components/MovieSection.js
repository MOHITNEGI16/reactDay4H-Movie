import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import "./MovieSection.css";
function MovieSection({
  plot,
  time,
  director,
  year,
  title,
  genre,
  image,
  poster,
}) {
  console.log(poster);
  return (
    <>
      <div className="container">
        <div className="description">
          <div className="description_main">
            <img
              src={poster}
              alt="poster_movie"
            />
            <div style={{ color: "white" }} className="description_movie">
              <h3>{title}</h3>
              <p>
                {year},{director}
              </p>
              <div className="time_type">
                <button> {time}</button>
                <span>{genre}</span>
              </div>
            </div>
          </div>

          <div className="description_paragraph">
            <p>{plot}</p>
          </div>

          <div className="icons">
            <CiShare2 style={{ fontSize: "2rem" }} />
            <FaHeart style={{ fontSize: "2rem" }} />
            <FaMessage style={{ fontSize: "2rem" }} />
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${image})` }}
          className="image"
        ></div>
      </div>
    </>
  );
}

export default MovieSection;
