import axios from "axios";

export const githubFetcher = (url) =>
  axios
    .get(`https://api.github.com${url}`, {
      headers: {
        Authorization: "token 300480bf903c3fb1778bff55719054034d078cc8",
        // Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
      },
    })
    .then((res) => res.data);
