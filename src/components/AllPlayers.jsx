import {
  useGetPuppiesQuery,
  usePostNewPuppyMutation,
  useDeletePuppyMutation,
} from "../API/index";
import "../app.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AllPlayers() {
  const response = useGetPuppiesQuery();
  console.log(response);

  const [postNewPuppy] = usePostNewPuppyMutation();
  const [deletePuppy] = useDeletePuppyMutation();

  const [puppyname, setPuppyname] = useState("");
  const [puppybreed, setPuppybreed] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setPuppyname(event.target.value);
    } else {
      setPuppybreed(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postNewPuppy({ name: puppyname, breed: puppybreed });
    setPuppyname("");
    setPuppybreed("");
  };

  const deletePuppyBtn = (id) => {
    deletePuppy(id);
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
              <div className="player-card">
                <Link to={`/singleplayer/${player.id}`} className="player-link">
                  <img src={player.imageUrl} />

                  <h2>{player.name}</h2>
                  <p>{player.breed}</p>
                </Link>
                <button onClick={() => deletePuppyBtn(player.id)}>
                  Delete
                </button>
              </div>
            );
          })
        )}
      </div>
      <section className="AddPlayer">
        <h2>Add new player</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <input
              value={puppyname}
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </label>
          <label>
            Breed:{" "}
            <input
              name="breed"
              placeholder="Breed"
              value={puppybreed}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </section>
    </>
  );
}
