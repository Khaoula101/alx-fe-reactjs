import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
    </>
  );
}

export default App;
