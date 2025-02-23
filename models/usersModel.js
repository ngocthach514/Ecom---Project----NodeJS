import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide name"],
    },
    email: {
      type: String,
      required: [true, "Provide email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Provide password"],
    },
    avatar: {
      type: String,
      default: "",
    },
    mobile: {
      type: Number,
      default: null,
    },
    refreshToken: {
      type: String,
      default: "",
    },
    verify_email: {
      type: Boolean,
      default: false,
    },
    last_login: {
      type: Date,
      default: "",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspended"],
      default: "Active",
    },
    address_details: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "ADDRESS",
      },
    ],
    shopping_cart: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "CART_PRODUCT",
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "ORDER",
      },
    ],
    fogot_password_otp: {
      type: String,
      default: null,
    },
    fogot_password_expiry: {
      type: Date,
      default: "",
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps : true }
);

const UserModel = mongoose.model("USER", usersSchema);

export default UserModel;