import axios from "axios";

export const githubFetcher = (url) =>
  axios
    .get(`https://api.github.com${url}`, {
      headers: {
        Authorization: "token 9c30982953f154ce139ab45b218876ec9fa09286",
        // Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
      },
    })
    .then((res) => res.data);
