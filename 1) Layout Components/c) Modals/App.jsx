import { Modal } from "./Modal";

const App = () => {
  return (
    <>
      <Modal>
        <LargeProductDetails product={products[0]} />
      </Modal>
    </>
  );
};

export default App;
