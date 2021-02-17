import axios from "axios";

export const githubFetcher = (url) =>
  axios
    .get(`https://api.github.com${url}`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
      },
    })
    .then((res) => res.data);
