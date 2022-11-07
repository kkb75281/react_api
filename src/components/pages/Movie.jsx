import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieList from "../include/MovieList";
import MovieSearch from "../include/MovieSearch";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [lists, setLists] = useState([]);

  // 자바스크립트 데이터 가져오는 방법
  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=540588f0940b5e6bdcf873b4608b86f0&query=${query}&page=1`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  // 리액트 데이터 가져오는 방법
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=540588f0940b5e6bdcf873b4608b86f0&query=horror&page=1"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=540588f0940b5e6bdcf873b4608b86f0&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((result) => setLists(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <MovieList lists={lists} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Movie;
