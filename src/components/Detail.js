import React from "react";
import 'font-awesome/css/font-awesome.min.css';
const DEFAULT_PLACEHOLDER_IMAGE = "https://img.icons8.com/plasticine/400/000/image-file.png";


const Detail = ({ data }) => {
  const poster = (data.Poster === "N/A") ? DEFAULT_PLACEHOLDER_IMAGE : data.Poster;
  return (
    <div className="container">
      <div className="page">
        <div className="breadcrumbs">
          <a href="/React-Hooker/">Home</a>
          <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
          <span>Movie Review</span>
          <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
          <span>{ data.Title }</span>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-md-4">
              <figure className="movie-poster"><img src={poster} alt="#"/></figure>
            </div>
            <div className="col-md-8">
              <h2 className="movie-title">{data.Title}</h2>
              <div className="movie-plot">
                <p>{ data.Plot }</p>
              </div>
              <ul className="movie-meta">
                <li><strong>Rating:</strong>
                  {
                    data.Ratings.map((rating, index) => (
                      <div key={index} className="rating">
                        <strong className="Source"><i>{ rating.Source }: </i></strong>
                        <span className="value">{rating.Value}</span>
                      </div>
                    ))
                  }
                </li>
                <li><strong>Runtime:</strong> { data.Runtime }</li>
                <li><strong>Released:</strong> { data.Released } ({data.Country})</li>
                <li><strong>Category:</strong> { data.Genre }</li>
              </ul>

              <ul className="starring">
                <li><strong>Directors:</strong> { data.Director }</li>
                <li><strong>Writers:</strong> { data.Writer }</li>
                <li><strong>Actors:</strong> {data.Actors}</li>
              </ul>
            </div>
          </div>
          <div className="entry-content">
            <div className="row">
              <div className="col-6">
                <p><strong>Awards:</strong> {data.Awards}</p>
                <p><strong>Language:</strong> {data.Language}</p>
                <p><strong>Metascore:</strong> {data.Metascore}</p>
                <p><strong>imdbRating:</strong> {data.imdbRating}</p>
                <p><strong>imdbVotes:</strong> {data.imdbVotes}</p>
              </div>
              <div className="col-6">
              <p><strong>imdbID:</strong> {data.imdbID}</p>
              <p><strong>Type:</strong> {data.Type}</p>
              <p><strong>DVD:</strong> {data.DVD}</p>
              <p><strong>BoxOffice:</strong> {data.BoxOffice}</p>
              <p><strong>Production:</strong> {data.Production}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
