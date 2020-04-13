import React, { useReducer, useEffect } from "react";
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import "../App.css";

const searchDefault = "Spider Man";

const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=4a3b711b&s=${searchDefault}`;


const initialState = {
  loading: true,
  data: {},
  errorMessage: false
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: false
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    case "HANDLE_PAGE_CHANGE":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return state;
  }
};


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
  
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: {
          movies: jsonResponse.Search,
          activePage: 1,
          totalCount: parseInt(jsonResponse.totalResults),
          searchValue: searchDefault
        }
      });
    });
    return () => {
      console.log(state);
    }
  }, [state]);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?apikey=4a3b711b&s=${searchValue}`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.Response === "True") {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: {
            movies: jsonResponse.Search,
            activePage: 1,
            totalCount: parseInt(jsonResponse.totalResults),
            searchValue: searchValue
          }
        });
      } else if(jsonResponse.Error === "Something went wrong.") {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: state.data
        });
      } else {
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: jsonResponse.Error
        });
      }
    });
  };


  const { data, errorMessage, loading } = state;

  const handlePageChange = (pageNumber) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
    
    fetch(`https://www.omdbapi.com/?apikey=4a3b711b&s=${data.searchValue}&page=${pageNumber}`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.Response === "True") {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: {
            movies: jsonResponse.Search,
            activePage: parseInt(pageNumber),
            totalCount: parseInt(jsonResponse.totalResults),
            searchValue: data.searchValue
          }
        });
      } else {
        dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
        });
      }
    });
  }
  return (
    <div className="App">
      <Header text="Search Films" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <div className="text-center col-12">
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          data.movies.map((movie, index) => (
            <Link key={`${index}-${movie.Title}`} className="movie" to={`/review/${movie.imdbID}`}>
              <Movie movie={movie} />
            </Link>
          ))
        )}
      </div>
      {(!loading && !errorMessage) && (
        <div align="center">
          <Pagination
            activePage={data.activePage}
            itemsCountPerPage={10}
            totalItemsCount={data.totalCount || 0}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};
export default App;