import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../context/movieContext/apiCalls";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const MovieList = () => {
  const { user } = useAuth0();

  if (!user) {
    return "You need to be connect";
  }

  return (
    <div>
      MovieList
    </div>
  );

};

export default MovieList
