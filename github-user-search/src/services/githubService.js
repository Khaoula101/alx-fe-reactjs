import axios from "axios";

export const fetchUserData = async (
  { username, location, minRepos },
  page = 1
) => {
  let query = "";
  if (username) query += `user:${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}&page=${page}`;
  return axios.get(url);
};
