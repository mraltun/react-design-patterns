import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

const App = () => {
  return (
    // We don't write it here but "CurrentUserLoader" will pass "user" prop to "UserInfo"
    <CurrentUserLoader>
      <UserLoader userId='234'>
        <UserInfo />
      </UserLoader>
    </CurrentUserLoader>
  );
};

export default App;
