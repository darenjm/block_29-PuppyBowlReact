import { useGetPuppiesQuery, usePostNewPuppyMutation } from "../API/index";
import "../app.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AllPlayers() {
  const response = useGetPuppiesQuery();
  console.log(response);

  const [postNewPuppy] = usePostNewPuppyMutation();

  const [puppyname, setPuppyname] = useState("");
  const [puppybreed, setPuppybreed] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setPuppyname(event.target.value);
    } else {
      setPuppybreed(event.target.value);
    }
  };

  return (
    <>
      <div>
        <h1 className="title">All Players</h1>
      </div>
      <div className="all-players-wrapper">
        {response.isLoading ? (
          <p>Loading...</p>
        ) : (
          response.data.data.players.map((player) => {
            return (
              <Link to={`/singleplayer/${player.id}`} className="player-card">
                <div>
                  <img src={player.imageUrl} />
                  <h2>{player.name}</h2>
                  <p>{player.breed}</p>
                </div>
              </Link>
            );
          })
        )}
      </div>
      <section className="AddPlayer">
        <h2>Add new player</h2>
        <form>
          <label>
            Name: <input value={puppyname} name="name" placeholder="Name" />
          </label>
          <label>
            Breed:{" "}
            <input
              type=""
              name="breed"
              placeholder="Breed"
              value={puppybreed}
              onChange=""
            />
          </label>
          <input type="submit" />
        </form>
      </section>
    </>
  );
}
