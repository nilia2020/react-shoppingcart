import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import { useModal } from "../hooks/useModal";
import CartItem from "./CartItem";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import CartEmpty from "./CartEmpty";
import "./shoppingCart.css";
import Loading from "./Loading";

const ShoppingCart = () => {
  const data = useContext(ShoppingContext);
  const { loading, products, addToCart, cart, deleteFromCart, cleanCart } =
    data;
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <>
      <section>
        <h2 className="my-4 text-xl font-bold text-center">Productos</h2>
        <div className="card">
          {loading && <Loading />}

          {products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          ))}
        </div>
        <button onClick={openModal}>Abrir Carrito de compras</button>
      </section>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        {cart.length === 0 && <CartEmpty />}
        {cart.length !== 0 && (
          <>
            <section>
              <h2 className="my-4 text-xl font-bold text-center">Carrito</h2>
              <article className="card">
                {cart.map((item) => (
                  <CartItem
                    key={item.name}
                    data={item}
                    deleteFromCart={deleteFromCart}
                  />
                ))}
              </article>
            </section>
            <section className="flex flex-col items-center">
              <button
                className="w-32 p-1 mt-4 font-bold border-2 border-yellow-500 rounded text-grey-500"
                onClick={() => {
                  cleanCart(cart);
                  closeModal();
                }}
              >
                Limpiar Carrito
              </button>
              <br />
              <h4 className="font-bold">
                {" "}
                Precio total: ${" "}
                <span className="text-xl">
                  {cart.reduce((previous, current) => {
                    return (
                      Number(previous) +
                      Number(current.price * current.quantity)
                    );
                  }, 0)}
                </span>
              </h4>
              <h5 className="font-bold">
                Cantidad Total:{" "}
                <span className="text-xl">
                  {cart.reduce((previous, current) => {
                    return Number(previous) + Number(current.quantity);
                  }, 0)}
                </span>
              </h5>
              <button className="w-32 p-1 mt-4 font-bold text-center border-2 border-yellow-500 rounded">
                Comprar
              </button>
            </section>
          </>
        )}
      </Modal>
    </>
  );
};

export default ShoppingCart;
