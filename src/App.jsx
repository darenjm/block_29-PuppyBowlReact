import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NewPlayer from "./components/NewPlayer";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div>
        <div className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/new-player">New Player</Link>
          <Link to="/singleplayer">Single Player</Link>
          <Link to="/all-players">All Players</Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-player" element={<NewPlayer />} />
          <Route path="/singleplayer" element={<SinglePlayer />} />
          <Route path="/all-players" element={<AllPlayers />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
