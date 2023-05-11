import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Moviedetails from "./components/Moviedetails";

import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import "./App.css";

const App = () => {
  const [shows, setShows] = useState([]);
  const [data, setData] = useState(JSON.parse(localStorage.getItem('userInfo')) ?? []);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setShows(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(data))
  }, [data]);

  return (
    <div className="container-fluid movie-app">
     

      <div className="row">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={<MovieList shows={shows} />}
            />
            <Route
              path="/:id"
              exact
              element={
                <Moviedetails shows={shows} data={data} setData={setData} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
