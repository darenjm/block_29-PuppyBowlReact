import { useGetPuppiesQuery } from "../API/index";

export default function AllPlayers() {
  const response = useGetPuppiesQuery();
  console.log(response);
  return (
    <>
      <div>
        <h1>All Players</h1>
      </div>
      <div>
        {response.isLoading ? (
          <p>Loading...</p>
        ) : (
          response.data.data.players.map((player) => {
            return (
              <div>
                <h4>{player.name}</h4>
                <p>{player.breed}</p>
                <img src={player.imageUrl} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
