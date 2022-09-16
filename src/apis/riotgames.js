import axios from "axios";

export const APIKEY = "RGAPI-113f1fe4-335a-4735-9aed-2d871640d1e8";

export const riotgames = axios.create({
  baseURL: "https://na1.api.riotgames.com/lol",
});

export const matches = axios.create({
  baseURL: "https://americas.api.riotgames.com/lol",
});
