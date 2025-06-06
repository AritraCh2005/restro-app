import { Category } from "../../models/Category";
import {isAdmin} from "../../api/auth/[...nextauth]/route";
import mongoose from "mongoose";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
    const { name } = await req.json();
    const categoryDoc = await Category.create({ name });
    return Response.json(categoryDoc);
    
}

export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    const {_id, name} = await req.json();
      await Category.updateOne({_id}, {name});
    return Response.json(true);
  }

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);
    const categories = await Category.find();
    return Response.json(categories);
}

export async function DELETE(req) {
  mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  // if (await isAdmin()) {
    await Category.deleteOne({_id});
  // }
  return Response.json(true);
}