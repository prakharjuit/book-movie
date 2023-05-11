import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  return (
    <>
      
      
      
      <div className="show-list">
      <h1 className="header">List of TV Shows</h1>
      
      
        {props.shows.map((show) => (
          <>
           
            <div class="image-container d-flex justify-content-start m-3">
              <div key={show.id} className="show-card">
                {show.show.image && (
                  <img
                    className="show-image"
                    src={show.show.image.medium}
                    alt={show.show.name}
                  />
                )}

                <p>{show.show.name}</p>
                <p>TYPE: {show.show.type}</p>
                <Link to={`${show.show.url}`} target="_blank">
                  Link
                </Link>
                <br />
                <Link to={`/${show.show.id}`} target="_blank">
                  View details
                </Link>

                {/* {console.log(show.show)} */}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default MovieList;
