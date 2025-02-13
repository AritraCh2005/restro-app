// import multer from "multer";
// import { MenuItem } from "../../../models/MenuItem";

// const upload = multer({ dest: "./public/uploads" }); // Save images in `public/uploads`

// const uploadMiddleware = upload.single("image");

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     uploadMiddleware(req, {}, async (err) => {
//       if (err) {
//         return res.status(500).json({ error: "File upload failed" });
//       }

//       const { name, description, baseprice } = req.body;
//       const imagePath = `/uploads/${req.file.filename}`; // File path for serving images

//       try {
//         const newItem = await MenuItem.create({
//           name,
//           description,
//           baseprice,
//           imagePath,
//         });
//         return res.status(201).json(newItem);
//       } catch (error) {
//         return res.status(500).json({ error: error.message });
//       }
//     });
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
