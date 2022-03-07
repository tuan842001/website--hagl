import React from "react";
import Header from "../../components/header/Header";
import News from "../../components/news/News";
import Video from "../../components/video/Video";
import Player from "../../components/player/Player";
import Schedule from "../../components/schedule/Schedule";

export default function Homepage() {
  return (
    <div className="home">
      <Header />
      <News />
      <Video />
      <Player />
      <Schedule />
    </div>
  );
}
