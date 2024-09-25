import axios from "axios";

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  return axios.get(url);
};
