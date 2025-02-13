
import {MenuItem} from "../../models/MenuItem";
import mongoose from "mongoose";
import { isAdmin } from "../../../libs/auth";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
//   if (await isAdmin()) {
    const menuItemDoc = await MenuItem.create(data);
    return Response.json(menuItemDoc);
//   } else {
//     return Response.json({});
//   }
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const { _id, ...data } = await req.json();
  const updatedItem = await MenuItem.findByIdAndUpdate(_id, data, { new: true });

  // Return the updated item
  return Response.json(updatedItem);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(
    await MenuItem.find()
  );
}

export async function DELETE(req) {
  mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  // if (await isAdmin()) {
    await MenuItem.deleteOne({_id});
  // }
  return Response.json(true);
}

// export async function PUT(req) {
//   try {
//     mongoose.connect(process.env.MONGO_URL);

//     const { _id, ...data } = await req.json();

//     // Validate _id
//     if (!mongoose.Types.ObjectId.isValid(_id)) {
//       return Response.json({ error: 'Invalid ID format' }, { status: 400 });
//     }

//     // Convert category name to ObjectId if necessary
//     if (data.category && typeof data.category === 'string') {
//       const categoryDoc = await Category.findOne({ name: data.category }).exec();
//       if (!categoryDoc) {
//         return Response.json({ error: 'Category not found' }, { status: 404 });
//       }
//       data.category = categoryDoc._id; // Replace category with its ObjectId
//     }

//     const updatedItem = await MenuItem.findByIdAndUpdate(_id, data, { new: true });

//     if (!updatedItem) {
//       return Response.json({ error: 'Item not found' }, { status: 404 });
//     }

//     return Response.json(updatedItem);
//   } catch (error) {
//     return Response.json({ error: error.message }, { status: 500 });
//   }
// }