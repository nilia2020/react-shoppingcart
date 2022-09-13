import ShoppingCart from "./components/ShoppingCart";
import ShoppingProvider from "./context/ShoppingContext";

const App = () => {
  return (
    <>
      <ShoppingProvider>
        <ShoppingCart />
      </ShoppingProvider>
    </>
  );
};

export default App;
