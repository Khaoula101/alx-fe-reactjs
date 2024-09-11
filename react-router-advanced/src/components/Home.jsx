import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/profile/details">Profile Details</Link>
        <Link to="/profile/settings">Profile Settings</Link>
      </nav>
    </div>
  );
}
