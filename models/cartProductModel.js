import mongoose from "mongoose";

const cartProductModel = new mongoose.Schema(
  {
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : "PRODUCT"
    },
    quantity : {
        type : Number,
        default : 1
    },
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : "USER"
    }
  },
  { timestamps: true }
);

const CartProductModel = mongoose.model("CART_PRODUCT", cartProductModel);

export default CartProductModel;
