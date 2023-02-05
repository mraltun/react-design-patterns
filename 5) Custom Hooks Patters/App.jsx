import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

const App = () => {
  return (
    <>
      <UserInfo />
      <UserInfo userId='123' />
      <ProductInfo productId='1234' />
    </>
  );
};

export default App;
