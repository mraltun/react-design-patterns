import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "234");

const App = () => {
  return (
    <>
      <UserInfoWrapped a={1} b='Hello' c={{ name: "Murat" }} />
      <UserInfoWithLoader />
      <UserInfoForm />
    </>
  );
};

export default App;
