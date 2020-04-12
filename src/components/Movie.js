import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "https://img.icons8.com/plasticine/400/000/image-file.png";
const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    // <div className="movie">
      <div className="item">
        <div style =
          {{
            backgroundImage: `url(${poster})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            paddingTop: '120%'
          }}
        >
        </div>
        <h2 className="title overflow-ellipsis">{movie.Title}</h2>
        <p>({movie.Year})</p>
      </div>
    // </div>
  );
};


export default Movie;