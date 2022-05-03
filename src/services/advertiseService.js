import { client } from "./config";

export const newAdvertise = (params) =>
  client.post("/advertise/newadvertise", params, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
export const getAdvertise = (params) =>
  client.get("/advertise/advertiseListing", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
export const updateAdvertise = (params) =>
  client.patch("/advertise/updateAdvertise", params);
