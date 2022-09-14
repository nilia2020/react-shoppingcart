import React from "react";

const CartEmpty = ({ closeModal }) => {
  return (
    <div className="flex flex-col h-[80vh] justify-evenly ">
      <h3 className="text-2xl font-bold text-center">Carrito de compras</h3>
      <h4 className="text-lg text-center">
        El carrito de compras esta vacío!!
      </h4>
      <button
        onClick={closeModal}
        className="w-[50%] border-2 border-green-500 self-center rounded-md p-2"
      >
        Ir a Comprar
      </button>
    </div>
  );
};

export default CartEmpty;
