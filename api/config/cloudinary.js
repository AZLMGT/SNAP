import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

///go to settings -> api keys to get info
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
