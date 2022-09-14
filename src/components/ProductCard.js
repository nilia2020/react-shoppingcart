const ProductCard = ({ data, addToCart }) => {
  const { name, price, image, content } = data;
  return (
    <div className="rounded-xl p-4 flex flex-col items-center bg-slate-200">
      <h4 className="font-bold">{name}</h4>
      <h5 className="text-green-800 font-bold">$ {price}</h5>
      <img src={image} width={150} alt={name} />
      <h5>Contenido: {content * 1000} ml</h5>
      <br />
      <button
        className="mt-4 rounded border-2 font-bold  text-grey-500 border-yellow-500 p-1"
        onClick={() => addToCart(name, data)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
