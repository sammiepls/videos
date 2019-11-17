import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});
