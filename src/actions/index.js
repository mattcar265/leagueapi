import { history } from "../components/App";
import { riotgames, APIKEY, matches } from "../apis/riotgames";

export const getPlayerByName = () => async (dispatch, getState) => {
  const response = await riotgames.get(
    "/summoner/v4/summoners/by-name/" +
      getState().form.searchbar.values.searchbar +
      "?api_key=" +
      APIKEY
  );
  const response_two = await riotgames.get(
    "/league/v4/entries/by-summoner/" + response.data.id + "?api_key=" + APIKEY
  );
  const response_three = await matches.get(
    "/match/v5/matches/by-puuid/" +
      response.data.puuid +
      "/ids?start=0&count=10&api_key=" +
      APIKEY
  );
  const response_four = await Promise.all(
    response_three.data.map(async (matchid) => {
      const response = await matches.get(
        `/match/v5/matches/` + matchid + "?api_key=" + APIKEY
      );
      return await response;
    })
  );
  await history.push(
    "/player_info/player_name/" + getState().form.searchbar.values.searchbar,
    getState().form.searchbar.values.searchbar
  );
  dispatch({
    type: "FETCH_PLAYER",
    payload: { response_two, response, response_three, response_four },
  });
};

export const selectMatch = (selectedmatch) => {
  return { type: "SELECT_MATCH", payload: selectedmatch };
};

export const clickPlayerName = (selectedPlayer) => async (dispatch) => {
  const response = await riotgames.get(
    "/summoner/v4/summoners/by-name/" + selectedPlayer + "?api_key=" + APIKEY
  );
  const response_two = await riotgames.get(
    "/league/v4/entries/by-summoner/" + response.data.id + "?api_key=" + APIKEY
  );
  const response_three = await matches.get(
    "/match/v5/matches/by-puuid/" +
      response.data.puuid +
      "/ids?start=0&count=10&api_key=" +
      APIKEY
  );
  const response_four = await Promise.all(
    response_three.data.map(async (matchid) => {
      const response = await matches.get(
        `/match/v5/matches/` + matchid + "?api_key=" + APIKEY
      );
      return await response;
    })
  );
  await history.push("/player_info/player_name/" + selectedPlayer);
  dispatch({
    type: "CLICK_PLAYER",
    payload: { response_two, response, response_three, response_four },
  });
};
