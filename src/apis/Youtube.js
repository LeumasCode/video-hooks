import axios from "axios";

const KEY = "AIzaSyA9ugp6v7_jCGYfyx7nSxSwY3olTwlaMXg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    path: "snippet",
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
