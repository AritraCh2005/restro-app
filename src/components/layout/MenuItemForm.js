import EditableImage from "./EditableImage";
import { useEffect, useState } from "react";
import Trash from "../icons/Trash";
import Plus from "../icons/Plus";
import MenuItemPriceProps from "./MenuItemPriceProps";

export default function MenuItemForm({ onSubmit, menuItem }) {
  const [name, setName] = useState(menuItem?.name || "");
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [image, setImage] = useState(menuItem?.image || "");
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [categories, setCategories] = useState([]);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState(
    menuItem?.extraIngredientPrices || []
  );
  const [category, setCategory] = useState(menuItem?.category || '');

  useEffect(() => {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        setCategories(categories);
      });
    });
  }, []);

  return (
    <form
      onSubmit={(ev) =>
        onSubmit(ev, {
          image,
          name,
          description,
          basePrice,
          sizes,
          extraIngredientPrices,
          category,
        })
      }
      className="mt-8 max-w-md mx-auto"
    >
      <div className="grid cols-1/3">
        <EditableImage link={image} setLink={setImage} />
      </div>
      <div className="grow">
        <label>Item name</label>
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <label>Item Description</label>
        <input
          type="text"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <label>Category</label>
        <select value={category} onChange={ev => setCategory(ev.target.value)}>
            {categories?.length > 0 && categories.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>

        <label>Base price</label>
        <input
          type="text"
          value={basePrice}
          onChange={(ev) => setBasePrice(ev.target.value)}
        />
        <MenuItemPriceProps
          name={"Sizes"}
          addLabel={"Add item size"}
          props={sizes}
          setProps={setSizes}
        />
        <MenuItemPriceProps
          name={"Extra ingredients"}
          addLabel={"Add ingredient prices"}
          props={extraIngredientPrices}
          setProps={setExtraIngredientPrices}
        />
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
