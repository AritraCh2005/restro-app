// 'use client';

// import { useEffect, useState } from "react";
// import SectionHeaders from "../../components/layout/SectionHeaders";

// export default function MenuPage() {
//   const [categories, setCategories] = useState([]);
//   const [menuItems, setMenuItems] = useState([]);
//   useEffect(() => {
//     fetch("/api/categories").then(res => {
//       res.json().then(categories => setCategories(categories));
//     });
//     fetch("/api/menu-items").then(res => {
//       res.json().then(menuItems => setMenuItems(menuItems));
//     });
//   }, []);
//   return (
//     <section className="mt-8">
//       {categories?.length > 0 &&
//         categories.map(c => (
//           <div>
//             <div className="text-center">
//               <SectionHeaders mainHeader={c.name} />
//             </div>
//             {menuItems.filter(item => item.category === c.id).map(item=>(
//                 <div>Item</div>
//             ))}
//           </div>
//         ))}
//     </section>
//   );
// }


// 'use client';

// import { useEffect, useState } from "react";
// import SectionHeaders from "../../components/layout/SectionHeaders";

// export default function MenuPage() {
//   const [categories, setCategories] = useState([]);
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     fetch("/api/categories").then(res => {
//       res.json().then((categories) => {
//         console.log("Categories:", categories); // Log categories
//         setCategories(categories);
//       });
//     });
//     fetch("/api/menu-items").then(res => {
//       res.json().then(menuItems => {
//         console.log("Menu Items:", menuItems); // Log menu items
//         setMenuItems(menuItems);
//       });
//     });
//   }, []);

//   return (
//     <section className="mt-8">
//       {categories?.length > 0 &&
//         categories.map(c => (
//           <div>
//             <div className="text-center">
//               <SectionHeaders mainHeader={c.name} />
//             </div>
//             {menuItems
//               .filter(m => m.category === c.id)
//               .map(item => {
//                 // Find the category name for the menu item
//                 const category = categories.find((cat) => cat.id === item.categoryId);
//                 console.log(`Menu Item: ${item.name}, Category: ${category ? category.name : 'Unknown'}`);
//                 return (
//                   <div key={item.id}>
//                     {item.name} - {category ? category.name : 'Unknown'}
//                   </div>
//                 );
//               })}
//           </div>
//         ))}
//     </section>
//   );
// }

'use client'

import { useEffect, useState } from "react";
import SectionHeaders from "../../components/layout/SectionHeaders";
import MenuItem from "../../components/menu/MenuItem";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch categories
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        console.log("Categories:", categories); // Debugging
        setCategories(categories);
      });
    });

    // Fetch menu items
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        console.log("Menu Items:", menuItems); // Debugging
        setMenuItems(menuItems);
      });
    });
  }, []);

  return (
    <section className="mt-8">
      {categories?.length > 0 &&
        categories.map((c) => (
          <div key={c._id}>
            <div className="text-center">
              <SectionHeaders mainHeader={c.name} />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 mb-8">
            {menuItems
              .filter((item) => item.category === c._id) // Match by _id
              .map((item) => (
                <div key={item._id}>
                  <MenuItem {...item} />
                </div>
              ))}
            </div>
            
          </div>
        ))}
    </section>
  );
}

