import { client } from "./config";


export const userSignup = async (params) =>
  await client.post("/v1/user/registration", params);
  export const userLogin=async(params)=>
  await client.get(`/v1/user/login?email=${params.email}&password=${params.password}`)
