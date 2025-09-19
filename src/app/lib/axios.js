const axios = require("axios");

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_Axios_Base,
  withCredentials: true,
});
