import mongoose from "mongoose";

const categoryModel = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("CATEGORY", categoryModel);

export default CategoryModel; 