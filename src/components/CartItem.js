const CartItem = ({ data, deleteFromCart }) => {
  const { id, name, price, quantity, image } = data;

  return (
    <div className="flex flex-col items-center p-4 bg-emerald-200 rounded-xl">
      <h4 className="py-4 font-bold">{name}</h4>
      <img src={image} alt={name} width={150} />
      <h5>Precio ${price}</h5>
      <h5>Cantidad: {quantity}</h5>
      <h5>Total: ${price * quantity}</h5>
      <button
        className="p-1 mt-4 font-bold text-black bg-orange-400 border-2 border-red-500 rounded"
        onClick={() => deleteFromCart(id, false, quantity, data)}
      >
        Eliminar uno
      </button>
      <button
        className="p-1 mt-4 font-bold text-red-500 border-2 border-red-500 rounded"
        onClick={() => deleteFromCart(id, true)}
      >
        {`Eliminar ${name}`}
      </button>
    </div>
  );
};

export default CartItem;
