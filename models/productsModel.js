import mongoose from "mongoose";

const productModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
      default: [],
    },
    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "CATEGORY",
      },
    ],
    subCategory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "SUB_CATEGORY",
      },
    ],
    unit: {
      type: String,
      default: "",
    },
    stock: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    discount: {
      type: Number,
      default: null,
    },
    description: {
      type: String,
      default: "",
    },
    more_details: {
      type: Object,
      default: {},
    },
    publish: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model('PRODUCT', productModel);
export default ProductModel