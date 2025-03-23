import { useGetPuppyByIdQuery } from "../API/index";
import { useParams } from "react-router-dom";

export default function SinglePlayer() {
  const { id } = useParams();
  const response = useGetPuppyByIdQuery(id);
  console.log(response);
  return (
    <div>
      <div>
        <h1 className="title">Single Player</h1>
      </div>
      <div className="all-players-wrapper">
        {response.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="player-card">
            <img src={response.data.data.player.imageUrl} />
            <h2>{response.data.data.player.name}</h2>
            <p>{response.data.data.player.breed}</p>
          </div>
        )}
      </div>
    </div>
  );
}
