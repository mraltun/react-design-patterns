import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";

const App = () => {
  return (
    // We don't write it here but "CurrentUserLoader" will pass "user" prop to "UserInfo"
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
};

export default App;
