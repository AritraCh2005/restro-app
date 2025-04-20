// "use client";

// import { useProfile } from "../useProfile";
// import EditableImage from "./EditableImage";
// import { useState } from "react";

// export default function UserForm({ user, onSave }) {
//   console.log(user);
//   const [image, setImage] = useState(user?.image || "");
//   const [userName, setUserName] = useState(user?.name || "");
//   const [saved, setSaved] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [phone, setPhone] = useState(user?.phone || "");
//   const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
//   const [city, setCity] = useState(user?.city || "");
//   const [country, setCountry] = useState(user?.country || "");
//   const [postalCode, setPostalCode] = useState(user?.postalCode || "");
//   const[admin,setAdmin]=useState(user?.admin||false)

//   const {data:loggedInUserData}=useProfile();

//   return (
//     <div className="flex gap-4 items-center">
//       <div>
//         <div className="rounded-lg">
//           <EditableImage link={image} setLink={setImage} />
//         </div>
//       </div>
//       <form
//         className="grow"
//         onSubmit={(ev) =>
//           onSave(ev, {
//             name: userName,
//             phone,
//             streetAddress,
//             city,
//             country,
//             postalCode,
//             image,
//             admin,
//           })
//         }
//       >
//         <input
//           type="text"
//           placeholder="First and last name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <input type="email" value={user ? user.email : ""} disabled />
//         <input
//           type="tel"
//           placeholder="Phone number"
//           value={phone}
//           onChange={(ev) => setPhone(ev.target.value)}
//         ></input>

//         <input
//           type="text"
//           placeholder="Street Address"
//           value={streetAddress}
//           onChange={(ev) => setStreetAddress(ev.target.value)}
//         ></input>
//         <div className="flex gap-4">
//           <input
//             type="text"
//             placeholder="City"
//             value={city}
//             onChange={(ev) => setCity(ev.target.value)}
//           ></input>
//           <input
//             type="text"
//             placeholder="Postal Code"
//             value={postalCode}
//             onChange={(ev) => setPostalCode(ev.target.value)}
//           ></input>
//         </div>

//         <input
//           type="text"
//           placeholder="Country"
//           value={country}
//           onChange={(ev) => setCountry(ev.target.value)}
//         ></input>

//         {loggedInUserData.admin &&(
//           <div>
//           <label
//             className="p-2 inline-flex items-center gap-2 border mb-2"
//             htmlFor="adminCb"
//           >
//             <input id="adminCb" type="checkbox" className="" value={'1'}
//             checked={admin}
//             onClick={ev=>setAdmin(ev.target.checked)}
//             />
//             <span>Admin</span>
//           </label>
//         </div>
//         )}

//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useProfile } from "../UseProfile";
import EditableImage from "./EditableImage";
import { useState } from "react";
import AddressInputs from "../layout/AddressInputs";
import { useEffect } from "react";

export default function UserForm({ user, onSave }) {
  const [image, setImage] = useState(user?.image || "");
  const [userName, setUserName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [admin, setAdmin] = useState(user?.admin || false);

  function handleAddressChange(propName, value) {
    if (propName === "city") setCity(value);
    if (propName === "country") setCountry(value);
    if (propName === "postalCode") setPostalCode(value);
    if (propName === "streetAddress") setStreetAddress(value);
    if (propName === "phone") setPhone(value);
  }

  const { data: loggedInUserData } = useProfile();

  useEffect(() => {
    if (user) {
      setImage(user.image || "");
      setUserName(user.name || "");
      setPhone(user.phone || "");
      setStreetAddress(user.streetAddress || "");
      setCity(user.city || "");
      setCountry(user.country || "");
      setPostalCode(user.postalCode || "");
      setAdmin(user.admin || false);
    }
  }, [user]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSave(ev, {
      name: userName,
      phone,
      streetAddress,
      city,
      country,
      postalCode,
      image,
      admin,
    });
  };

  return (
    <>
    <div
      className="flex gap-4 items-center bg-cover bg-center p-6 rounded-lg"
      style={{
        backgroundImage: "url('/FormBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <div className="gap-4 items-center">
      <div>
        <div className="rounded-lg">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form className="grow" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First and last name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input type="email" value={user?.email || ""} disabled />
        {/* <input type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Street Address" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
        <div className="flex gap-4">
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>
        <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} /> */}

        <AddressInputs
          addressProps={{ phone, streetAddress, city, postalCode, country }}
          phone={phone}
          streetAddress={streetAddress}
          city={city}
          postalCode={postalCode}
          country={country}
          setAddressProp={handleAddressChange}
        />
        {loggedInUserData?.admin && (
          <label className="p-2 inline-flex items-center gap-2 border mb-2 bg-red-600 text-white">
            <input
              type="checkbox"
              checked={admin}
              onChange={(e) => setAdmin(e.target.checked)}
            />
            <span>Admin</span>
          </label>
         )} 
        <button type="submit">Save</button>
      </form>
    </div>
    </div>
    </>
  );
}
