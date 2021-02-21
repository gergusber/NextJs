import axios from "axios";

export const githubFetcher = (url) =>
  axios
    .get(`https://api.github.com${url}`, {
      headers: {
        // Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
        Authorization: `token 4efe31bce83ffd13170767c9323d26ecfb3770a5`,
      },
    })
    .then((res) => res.data);
