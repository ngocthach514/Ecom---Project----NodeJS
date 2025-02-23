import mongoose from "mongoose";

const subCategoryModel = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    categoryId : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "CATEGORY",
        }
    ]
  },
  { timestamps: true }
);

const SubCategoryModel = mongoose.model("SUB_CATEGORY", subCategoryModel);

export default SubCategoryModel;