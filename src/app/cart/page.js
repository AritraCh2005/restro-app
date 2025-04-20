"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext, cartProductPrice } from "../../components/AppContext";
import SectionHeaders from "../../components/layout/SectionHeaders";
import Image from "next/image";
import Trash from "../../components/icons/Trash";
import AddressInputs from "../../components/layout/AddressInputs";
import { useProfile } from "../../components/UseProfile";

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  const [address,setAddress]= useState({});
  const {data:profileData}=useProfile();

  useEffect(() => {
    if (profileData?.city) {
      const {phone, streetAddress, city, postalCode, country} = profileData;
      const addressFromProfile = {
        phone,
        streetAddress,
        city,
        postalCode,
        country
      };
      setAddress(addressFromProfile);
    }
  }, [profileData]);


  let total = 0;
  for (const p of cartProducts) {
    total += cartProductPrice(p);
  }

  function handleAddressChange(propName, value) {
    setAddress(prevAddress => ({...prevAddress, [propName]:value}));
  }

  return (
    <section className="mt-8">
      <SectionHeaders mainHeader="Cart" />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          {cartProducts?.length == 0 && <div> No products in your cart</div>}
          <div>
            {cartProducts?.length > 0 &&
              cartProducts.map((product, index) => (
                <div className="flex items-center gap-4 mb-4 border-b py-4">
                  <div className="w-24">
                    <Image
                      src={product.image}
                      width={200}
                      height={200}
                      alt=""
                    />
                  </div>
                  <div className="grow">
                    <h3 className="font-semibold">{product.name}</h3>
                    {product.size && (
                      <div className="text-sm text-gray-800">
                        Size: <span>{product.size.name}</span>
                      </div>
                    )}
                    {product.extras?.length && (
                      <div className="text-sm text-gray-500">
                        {product.extras.map((extra) => (
                          <div>
                            Extra {extra.name} ${extra.price}{" "}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-lg font-semibold">
                    ${cartProductPrice(product)}
                  </div>
                  <div className="ml-2">
                    <button
                      type="button"
                      onClick={() => removeCartProduct(index)}
                      className="p-2"
                    >
                      <Trash />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="py-4 text-right pr-8">
            <span className="text-gray-500 text-sm">Subtotal:</span>
           
          <span className="text-lg font-semibold pl-2">${total}</span>
          </div>
         
        </div>
        
        <div className="bg-gray-200">
            <h2>Checkout</h2>
            <form>
                <AddressInputs addressProps={address}
                setAddressProps={handleAddressChange} 
                />
                <button type="submit">Pay ${total}</button>
            </form>

        </div>
      </div>
    </section>
  );
}
