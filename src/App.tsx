import { User } from "domain/src/User";

function App() {
  const user: User = {
    firstName: "un",
    lastName: "ko",
  };

  return <div className="App">{User.fullName(user)}</div>;
}

export default App;
