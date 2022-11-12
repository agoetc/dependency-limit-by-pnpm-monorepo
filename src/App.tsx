import { User } from "domain/src/User";

const App = () => {
  const user: User = {
    firstName: "un",
    lastName: "ko",
  };

  return <div className="App">{User.fullName(user)}</div>;
}

export default App;
