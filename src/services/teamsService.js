import { client } from "./config";

export const importTeam = async (params) =>
  await client.post("/teams/importteam", params, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

export const getTeam = async () =>
  await client.get("/teams/retriveTeam", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
