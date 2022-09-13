import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import CartItem from "./CartItem";
import Product from "./Product";

import "./shoppingCart.css";
import Loading from "./Loading";

const ShoppingCart = () => {
  const data = useContext(ShoppingContext);
  const { loading, products, addToCart, cart, deleteFromCart, cleanCart } =
    data;
  return (
    <>
      <section>
        <h2 className="my-4 text-xl font-bold text-center">Productos</h2>
        <div className="card">
          {loading && <Loading />}

          {products.map((product) => (
            <Product key={product.id} data={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      <h2 className="my-4 text-xl font-bold text-center">Carrito</h2>
      <section>
        <article className="card">
          {loading && <Loading />}
          {cart.map((item) => (
            <CartItem
              key={item.name}
              data={item}
              deleteFromCart={deleteFromCart}
            />
          ))}
        </article>
      </section>

      <br />
      <button
        className="p-1 mt-4 font-bold border-2 border-yellow-500 rounded text-grey-500"
        onClick={() => cleanCart(cart)}
      >
        Limpiar Carrito
      </button>
      <br />
      <h4>
        {" "}
        Precio total: $
        {cart.reduce((previous, current) => {
          return Number(previous) + Number(current.price * current.quantity);
        }, 0)}
      </h4>
      <h5>
        Cantidad Total:{" "}
        {cart.reduce((previous, current) => {
          return Number(previous) + Number(current.quantity);
        }, 0)}
      </h5>
    </>
  );
};

export default ShoppingCart;
