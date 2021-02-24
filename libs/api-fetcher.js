import axios from "axios";

export const apiFetcher = (url) =>
  axios.get(`/api${url}`).then((res) => res.data);
