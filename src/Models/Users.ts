import mongoose, { Schema } from "mongoose";
import validator from "validator";
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "Invalid email address",
    },
    imageUrls: {
      type: [String],
      required: true,
      trim: true,
      validate: {
        validator: (value: string) => validator.isURL(value),
        message: "Invalid URL",
      },
    },
  },
});

export const User = mongoose.model("User", UserSchema);
