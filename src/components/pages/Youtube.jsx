import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeBtn from "../include/YoutubeBtn";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";
import { useState, useEffect } from "react";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyD6QGqJEKoA6i3vi-8HlZO2Y6S0UoFTKb4&maxResults=30&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=coding&key=AIzaSyD6QGqJEKoA6i3vi-8HlZO2Y6S0UoFTKb4&maxResults=30&type=video"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=coding&key=AIzaSyD6QGqJEKoA6i3vi-8HlZO2Y6S0UoFTKb4&maxResults=30&type=video"
    )
      .then((response) => response.json())
      .then((result) => setRandom(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["YouTube", "reference API"]} />
        <YoutubeSlider random={random} />
        <YoutubeSearch onSearch={search} />
        <YoutubeBtn onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
