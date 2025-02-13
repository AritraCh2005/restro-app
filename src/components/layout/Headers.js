// "use client";
// import { useSession, signOut } from "next-auth/react";
// import Link from "next/link";
// import { useContext } from "react";
// import { CartContext } from "../AppContext";
// import ShoppingCart from "../icons/ShoppingCart";

// export default function Headers() {
//   const session = useSession();
//   const status = session?.status;
//   const userData = session.data?.user;
//   let userName = userData?.name || userData?.email;

//   const { cartProducts } = useContext(CartContext);

//   if (userName && userName.includes(" ")) {
//     userName = userName.split(" ")[0];
//   }

//   return (
//     <header className="flex items-center justify-between p-2 pb-2 top-0 w-full">
//       <Link className="text-red-500 font-serif text-4xl" href="/">
//         AAHAR
//       </Link>
//       <nav className="flex items-center gap-8 text-gray-500 font-semibold">
//         <Link href="/">Home</Link>
//         <Link href="/menu">Menu</Link>
//         <Link href="/#about">About</Link>
//         <Link href="/#contact">Contact</Link>
//       </nav>
//       <div className="flex items-center gap-4">
//         {status === "authenticated" && (
//           <>
//             <Link href={"/profile"} className="whitespace-nowrap">
//               Hello, {userName}
//             </Link>
//             <button
//               onClick={() => signOut()}
//               className="bg-red-500 rounded-full text-white px-8 py-2"
//             >
//               Logout
//             </button>
//           </>
//         )}

//         {status !== "authenticated" && (
//           <>
//             <Link
//               href={"/login"}
//               className=" rounded-full text-gray-700 px-8 py-2"
//             >
//               Login
//             </Link>
//             <Link
//               href={"/register"}
//               className="bg-red-500 rounded-full text-white px-8 py-2"
//             >
//               Register
//             </Link>
//           </>
//         )}

//         <Link href={"/cart"} className="relative">
//           <ShoppingCart />
//           {cartProducts?.length > 0 && (
//             <span className="absolute font-bold -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//               {cartProducts.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </header>
//   );
// }

// // "use client";
// // import { useSession, signOut } from "next-auth/react";
// // import Link from "next/link";
// // import { useContext } from "react";
// // import { CartContext } from "../AppContext";
// // import ShoppingCart from "../icons/ShoppingCart";

// // export default function Headers() {
// //   const session = useSession();
// //   const status = session?.status;
// //   const userData = session.data?.user;
// //   let userName = userData?.name || userData?.email;

// //   const { cartProducts } = useContext(CartContext);

// //   if (userName && userName.includes(" ")) {
// //     userName = userName.split(" ")[0];
// //   }

// //   return (
// //     <header className="bg-black text-white flex items-center justify-between px-6 py-4 shadow-md sticky top-0 z-50">
// //       <Link className="text-red-500 font-serif text-3xl tracking-wide" href="/">
// //         AAHAR
// //       </Link>
// //       <nav className="flex items-center gap-6 text-gray-300">
// //         <Link
// //           href="/"
// //           className="hover:text-white transition duration-300 ease-in-out"
// //         >
// //           Home
// //         </Link>
// //         <Link
// //           href="/menu"
// //           className="hover:text-white transition duration-300 ease-in-out"
// //         >
// //           Menu
// //         </Link>
// //         <Link
// //           href="/#about"
// //           className="hover:text-white transition duration-300 ease-in-out"
// //         >
// //           About
// //         </Link>
// //         <Link
// //           href="/#contact"
// //           className="hover:text-white transition duration-300 ease-in-out"
// //         >
// //           Contact
// //         </Link>
// //       </nav>
// //       <div className="flex items-center gap-4">
// //         {status === "authenticated" && (
// //           <>
// //             <Link
// //               href={"/profile"}
// //               className="text-gray-300 hover:text-white whitespace-nowrap"
// //             >
// //               Hello, {userName}
// //             </Link>
// //             <button
// //               onClick={() => signOut()}
// //               className="bg-red-500 hover:bg-red-600 rounded-full text-white px-6 py-2 transition duration-300 ease-in-out"
// //             >
// //               Logout
// //             </button>
// //           </>
// //         )}

// //         {status !== "authenticated" && (
// //           <>
// //             <Link
// //               href={"/login"}
// //               className="border border-gray-500 rounded-full text-gray-300 px-6 py-2 hover:bg-gray-800 transition duration-300 ease-in-out"
// //             >
// //               Login
// //             </Link>
// //             <Link
// //               href={"/register"}
// //               className="bg-red-500 hover:bg-red-600 rounded-full text-white px-6 py-2 transition duration-300 ease-in-out"
// //             >
// //               Register
// //             </Link>
// //           </>
// //         )}

// //         <Link href={"/cart"} className="relative">
// //           <ShoppingCart className="text-gray-300 hover:text-white transition duration-300 ease-in-out" />
// //           {cartProducts?.length > 0 && (
// //             <span className="absolute font-bold -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
// //               {cartProducts.length}
// //             </span>
// //           )}
// //         </Link>
// //       </div>
// //     </header>
// //   );
// // }



"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../AppContext";
import ShoppingCart from "../icons/ShoppingCart";
import ProfileImg from "../icons/ProfileImg"
import Image from "next/image";

export default function Headers() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;

  const { cartProducts } = useContext(CartContext);

  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <header className="bg-green-800 text-white shadow-lg sticky top-0 z-50 pb-4">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Image
                  width={40} height={40}
                  src={"/strawberry.png"}
                  alt={"pizza"}
                />

        {/* Navigation */}
        <nav className="flex items-center gap-8 font-mono">
          <Link
            href="/"
            className="text-white hover:text-gray-200 transition duration-300 hover:bg-yellow-400"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-white hover:text-gray-200 transition duration-300  hover:bg-yellow-400"
          >
            Menu
          </Link>
          <Link
            href="/#about"
            className="text-white hover:text-gray-200 transition duration-300  hover:bg-yellow-400"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-white hover:text-gray-200 transition duration-300  hover:bg-yellow-400"
          >
            Contact
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {status === "authenticated" && (
            <>
              <Link
                href={"/profile"}
                className="whitespace-nowrap text-white hover:text-gray-200 transition duration-300 hover:bg-yellow-700"
              >
                <ProfileImg/>
              </Link>
              <button
                onClick={() => signOut()}
                className="border-white text-white font-semibold px-6 py-2 rounded-full transition duration-300"
              >
                Logout
              </button>
            </>
          )}

          {status !== "authenticated" && (
            <>
              <Link
                href={"/login"}
                className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="border-white font-semibold px-6 py-2 rounded-full transition duration-300"
              >
                Register
              </Link>
            </>
          )}

          {/* Cart */}
          <Link href={"/cart"} className="relative">
            <ShoppingCart className="text-white hover:text-gray-200 transition duration-300" />
            {cartProducts?.length > 0 && (
              <span className="absolute font-bold -top-2 -right-2 bg-white text-blue-600 text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

