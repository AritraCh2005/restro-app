// import Image from "next/image";
// import Right from "../icons/Right";

// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="py-18 px-18 bottom-24">
//         <h1 className="text-4xl font-semibold">
//           Everything is better with a <span className="text-red-500">Pizza</span>
//         </h1>
//         <p className="my-8 text-gray-500">
//           Pizza is the missing piece that makes every day complete. It is very
//           yummmmmy!!!
//         </p>
//         <div className="flex gap-4">
//         <button className="bg-red-500 uppercase flex justify-center items-center gap-2 text-white px-4 py-2 rounded-full whitespace-nowrap font-semibold">
//           Order Now
//         </button>
//         <button className="bg-gray-500 border-0 items-center text-white px-8 py-4 rounded-full font-semibold">
//           Learn More
//         </button>
//       </div>
//     </div>

//       <div className="relative p-3">
//         <Image
//           width={400} height={400}
//           src={"/biryani.png"}
//           objectFit={"contain"}
//           alt={"pizza"}
//         ></Image>
//       </div>
      
//     </section>
//   );
// }


import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero py-24 flex flex-col items-center text-center">
      {/* Centered Heading */}
      <h1 className="text-4xl font-serif text-green-400 mb-6 px-3">
       Welcome to AAHAR!  
      </h1>

      {/* Centered Image */}
      <div className="relative">
        <Image
          width={400}
          height={400}
          src="/biryani.png"
          objectFit="contain"
          alt="Biryani"
        />
      </div>
    </section>
  );
}




// 'use client'
// import Image from 'react-bootstrap';
// import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are imported

// export default function Hero() {
//   return (
//     <section className="hero py-24">
//       <h1 className="text-4xl font-semibold text-green-400">
//         Your Favorite Meal Awaits!
//       </h1>
//       <p className="my-8 text-white">
//         Indulge in the finest delicacies, made with love and the freshest ingredients. Taste the difference today!
//       </p>

//       {/* React-Bootstrap Carousel */}
//       <Carousel>
//         <Carousel.Item>
//           <Image
//             width={400}
//             height={400}
//             src="/biryani.png"
//             objectFit="contain"
//             alt="Biryani"
//           />
//         </Carousel.Item>

//         <Carousel.Item>
//           <Image
//             width={400}
//             height={400}
//             src="/Round.png"
//             objectFit="contain"
//             alt="Pizza"
//           />
//         </Carousel.Item>

//         <Carousel.Item>
//           <Image
//             width={400}
//             height={400}
//             src="/strawberry.png"
//             objectFit="contain"
//             alt="Burger"
//           />
//         </Carousel.Item>
//       </Carousel>
//     </section>
//   );
// }
