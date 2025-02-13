// export default function MenuItemTile({onAddToCart,...item}) {
//     const {name, basePrice, image, description,
//       sizes,extraIngredientPrices
//     } = item;

//     const hasSizesOrExtras = sizes.length > 0 || extraIngredientPrices.length > 0;
//     return(
//         <div className="p-4 border rounded shadow">
//         <img
//           src={image}
//           alt="Item"
//           className="w-full h-32 object-cover rounded"
//         />
//         <h3 className="text-lg font-bold mt-2">{name}</h3>
//         <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
//         <button
//           type="button"
//           onClick={onAddToCart}
//           className="mt-4 bg-red-500 text-white rounded-full px-8 py-2"
//         >
//           {(hasSizesOrExtras) ? (
//             <span> From ${basePrice} onwards...</span>
//           ):(
//             <span>Add to Cart ${basePrice}</span>
//           )}
         
//         </button>
//       </div>
//     );
// }

export default function MenuItemTile({ onAddToCart, ...item }) {
  const {
    name,
    basePrice,
    image,
    description,
    sizes,
    extraIngredientPrices,
  } = item;

  const hasSizesOrExtras = sizes.length > 0 || extraIngredientPrices.length > 0;

  return (
    <div
      className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/texture-wooden-boards.jpg')",
      }}
    >
      <div className="relative bg-white bg-opacity-80 rounded-lg p-4 shadow-md">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
        </div>
        <button
          type="button"
          onClick={onAddToCart}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg px-4 py-2 transition-colors duration-200"
        >
          {hasSizesOrExtras ? (
            <span>From ${basePrice} onwards...</span>
          ) : (
            <span>Add to Cart - ${basePrice}</span>
          )}
        </button>
      </div>
    </div>
  );
}
