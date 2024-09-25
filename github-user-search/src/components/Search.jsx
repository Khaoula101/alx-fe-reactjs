import { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const query = { username, location, minRepos };
      const response = await fetchAdvancedUserData(query);
      setUsers(response.data.items); // Advanced search returns multiple users
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            GitHub Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g., New York)"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Minimum Repositories
          </label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum Repositories"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-indigo-500">Loading...</p>}
      {error && (
        <p className="mt-4 text-red-500">Looks like we cant find the user</p>
      )}

      {users.length > 0 && (
        <div className="mt-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center space-x-4 p-4 border-b border-gray-200"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.login}</p>
                <p className="text-sm text-gray-500">{user.location}</p>
                <p className="text-sm text-gray-500">
                  Repos: {user.public_repos}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
