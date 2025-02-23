import mongoose from "mongoose";

const orderModel = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "USER",
    },
    orderId: {
      type: String,
      required: [true, "Provide orderId"],
      unique: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "PRODUCT",
    },
    product_details: {
      name: String,
      image: Array,
    },
    paymentId: {
      type: String,
      default: "",
    },
    payment_status: {
      type: String,
      default: "",
    },
    delivery_address: {
        type : mongoose.Schema.ObjectId,
        ref : "ADDRESS"
    },
    subTotalAmt : {
        type : Number,
        default : 0
    },
    TotalAmt : {
        type : Number,
        default : 0
    },
    invoice_receipt : {
        type : String,
        default : ""
    }
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("ORDER", orderModel);

export default OrderModel;
