import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import ProductInfo from "./ProductInfo";

const App = () => {
  return (
    // We don't write it here but "CurrentUserLoader" will pass "user" prop to "UserInfo"
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader userId='234'>
        <UserInfo />
      </UserLoader>
      <UserLoader userId='123'>
        <UserInfo />
      </UserLoader>
      <ResourceLoader resourceUrl='/users/123' resourceName='user'>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl='/products/1234' resourceName='product'>
        <ProductInfo />
      </ResourceLoader>
    </>
  );
};

export default App;
