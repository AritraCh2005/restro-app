// 'use client';
// import Link from "next/link";
// import {usePathname} from "next/navigation";

// export default function UserTabs({isAdmin}) {
//   const path = usePathname();
//   return (
//     <div className="flex mx-auto gap-2 tabs justify-center flex-wrap p-5">
//       <Link
//         className={path === '/profile' ? 'active' : ''}
//         href={'/profile'}
//       >
//         Profile
//       </Link>
//       {isAdmin && (
//         <>
//           <Link
//             href={'/categories'}
//             className={path === '/categories' ? 'active' : ''}
//           >
//             Categories
//           </Link>
//           <Link
//             href={'/menu-items'}
//             className={path.includes('menu-items') ? 'active' : ''}
//           >
//             Menu Items
//           </Link>
//           <Link
//             className={path.includes('/users') ? 'active' : ''}
//             href={'/users'}
//           >
//             Users
//           </Link>
//         </>
//       )}
//       {/* <Link
//         className={path === '/orders' ? 'active' : ''}
//         href={'/orders'}
//       >
//         Orders
//       </Link> */}
//     </div>
//   );
// }

// 'use client';
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import ProfileImg from "../icons/ProfileImg";

// export default function UserTabs({ isAdmin }) {
//   const path = usePathname();

//   return (
//     <div className="flex mx-auto gap-4 tabs justify-center flex-wrap p-4 rounded-lg shadow-lg">
//       <Link
//         className="px-4 py-2 rounded-md font-medium text-white bg-red-600"
//         href={'/profile'}
//       >
        
//           <ProfileImg />
//       </Link>
//       {isAdmin && (
//         <>
//           <Link
//             href={'/categories'}
//             className="px-4 py-2 rounded-md font-medium text-white bg-red-600"
//           >
//             Categories
//           </Link>
//           <Link
//             href={'/menu-items'}
//             className="px-4 py-2 rounded-md font-medium text-white bg-red-600"
//           >
//             Menu Items
//           </Link>
//           <Link
//             className="px-4 py-2 rounded-md font-medium text-white bg-red-600"
//             href={'/users'}
//           >
//             Users
//           </Link>
//         </>
//       )}
//     </div>
//   );
// }

export default function UserTabs({ isAdmin }) {
  const path = usePathname();

  return (
    <div className="flex mx-auto gap-4 tabs justify-center flex-wrap p-4 rounded-lg shadow-lg">
      <Link
        className="px-4 py-2 rounded-md font-medium text-white bg-red-600"
        href={'/profile'}
      >
        <ProfileImg />
      </Link>

      <Link
        href={'/categories'}
        className="px-4 py-2 rounded-md font-medium text-white bg-red-600"
      >
        Categories
      </Link>
      <Link
        href={'/menu-items'}
        className="px-4 py-2 rounded-md font-medium text-white bg-red-600"
      >
        Menu Items
      </Link>
      <Link
        className="px-4 py-2 rounded-md font-medium text-white bg-red-600"
        href={'/users'}
      >
        Users
      </Link>
    </div>
  );
}


