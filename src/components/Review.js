import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import Detail from "./Detail";
import "../Detail.css";

const initialState = {
  loading: true,
  data: {},
  errorMessage: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DETAIL_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: false
      };
    case "DETAIL_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case "DETAIL_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const Review = ({ match: { params } }) => {
  const { id } = params;
  const [state, dispatch] = useReducer(reducer, initialState);
  const DETAIL_MOVIE_API_URL = `https://www.omdbapi.com/?apikey=4a3b711b&i=${id}`;

  useEffect(() => {
    fetch(DETAIL_MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
  
      dispatch({
        type: "DETAIL_MOVIES_SUCCESS",
        payload: jsonResponse
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, errorMessage, loading } = state;

  return (
    <div className="Detail">
      <Header text="Movie Review" />
      <div>
        {loading && !errorMessage ? (
          <div className="container">
            <div className="text-center col-12">
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <Detail  data={data} />
        )}
      </div>
    </div>
  );
};
export default Review;