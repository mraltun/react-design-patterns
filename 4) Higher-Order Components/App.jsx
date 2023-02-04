import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "234");

const App = () => {
  return (
    <>
      <UserInfoWrapped a={1} b='Hello' c={{ name: "Murat" }} />
      <UserInfoWithLoader />
    </>
  );
};

export default App;
