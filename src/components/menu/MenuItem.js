// import React, { useContext } from "react";
// import { CartContext } from "../AppContext";
// import toast from "react-hot-toast";
// import { useState } from "react";
// import MenuItemTile from "../menu/MenuItemTile";
// import Image from "next/image";

// export default function MenuItem(menuItem) {
//   const { image, name, description, basePrice, sizes, extraIngredientPrices } =
//     menuItem;

//   const [showPopup, setShowPopup] = useState(false);
//   const { addToCart } = useContext(CartContext);

//   async function handleAddToCartButtonClick() {
//     if (sizes.length === 0 && extraIngredientPrices.length === 0) {
//       addToCart(menuItem);
//       toast.success("Item added to cart");
//     } else {
//       console.log("show popup");
//       setShowPopup(true);
//     }
//   }
//   return (
//     <>
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
//           <div className="bg-white p-4 rounded-lg max-w-md">
//              <Image src={image} alt={name} width={300} height={200} className="mx-auto" />
//              <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>
//              <p className="text-gray-700 mb-4 text-center">{description}</p>
//              console.log(sizes);
//              {sizes?.length > 0 && (

//               <div className="bg-gray-400 rounded-md p-2 ">
//                 <h3>Pick your size</h3>
//               </div>
//               )}
//             <button
//               onClick={() => setShowPopup(false)}
//               className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <MenuItemTile onAddToCart={handleAddToCartButtonClick} {...menuItem} />
//     </>
//   );
// }

import React, { useContext } from "react";
import { CartContext } from "../AppContext";
import toast from "react-hot-toast";
import { useState } from "react";
import MenuItemTile from "../menu/MenuItemTile";
import Image from "next/image";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;

  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useContext(CartContext);

  async function handleAddToCartButtonClick() {
    const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    if (hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }

    addToCart(menuItem, selectedSize, selectedExtras);
    setShowPopup(false);
    toast.success("Item added to cart");
  }

  function handleExtraThingClick(ev, extraThing) {
    const checked = ev.target.checked;
    if (checked) {
      setSelectedExtras((prev) => [...prev, extraThing]);
    } else {
      setSelectedExtras((prev) => {
        return prev.filter((e) => e.name !== extraThing.name);
      });
    }
  }

  // Log sizes for debugging outside JSX
  console.log(sizes);

  let selectedPrice = basePrice;
  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }

  if (selectedExtras?.length > 0) {
    for (const extra of selectedExtras) {
      selectedPrice += extra.price;
    }
  }

  return (
    <>
{showPopup && (
  <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
    <div className="bg-white p-4 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="mx-auto"
      />
      <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>
      <p className="text-gray-700 mb-4 text-center">{description}</p>
      {sizes?.length > 0 && (
        <div className="p-2">
          <h3 className="text-center font-medium text-lg text-blue-800">
            Pick your size
          </h3>
          {sizes.map((size) => (
            <label className=" flex items-center gap-3 p-4 text-center border rounded-md mb-1">
              <input
                type="radio"
                onClick={() => setSelectedSize(size)}
                checked={selectedSize?.name === size.name}
                name="size"
              />
              {size.name} ${basePrice + size.price}
            </label>
          ))}
        </div>
      )}

      {extraIngredientPrices?.length > 0 && (
        <div className="p-2">
          <h3 className="text-center font-medium text-lg text-blue-800">
            Pick toppings
          </h3>
          {extraIngredientPrices.map((extraThing) => (
            <label className=" flex items-center gap-3 p-4 text-center border rounded-md mb-1">
              <input
                onClick={(ev) => handleExtraThingClick(ev, extraThing)}
                type="checkbox"
                name={extraThing.name}
              />
              {extraThing.name} +${extraThing.price}
            </label>
          ))}
        </div>
      )}
      <button
        className="bg-green-600 text-white sticky bottom-2 w-full p-2"
        onClick={handleAddToCartButtonClick}
        type="button"
      >
        Add to Cart ${selectedPrice}
      </button>

      <button
        onClick={() => setShowPopup(false)}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded w-full"
      >
        Close
      </button>
    </div>
  </div>
)}

      <MenuItemTile onAddToCart={handleAddToCartButtonClick} {...menuItem} />
    </>
  );
}
