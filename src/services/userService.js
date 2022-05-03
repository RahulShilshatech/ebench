import { client } from "./config";

export const userRegistration = async (params) =>
  // eslint-disable-next-line no-return-await
  await client.post("user/registration", params);

export const userLogin = async (params) =>
  await client.post("/users/login", params);
export const vendorList = async () => await client.get("/users/vendors");
export const userList = async () => await client.get("/users/users");

export const getCurrentUser = async () =>
  await client.get("/users/currentUser", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
