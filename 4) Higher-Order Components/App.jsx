import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";

const UserInfoWrapped = printProps(UserInfo);

const App = () => {
  return <UserInfoWrapped a={1} b='Hello' c={{ name: "Murat" }} />;
};

export default App;
