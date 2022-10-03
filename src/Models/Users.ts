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
  },
  imageUrls: {
    type: [String],
    // required: true,
    validate: {
      // get the value of the imageUrls field by loop and validate it using validator.isURL
      validator: function (v: string[]) {
        for (let i = 0; i < v.length; i++) {
          if (!validator.isURL(v[i])) {
            return false;
          }
        }
        return true;
      },
      message: "Please provide a valid image URL",
    },
  },
});

export const User = mongoose.model("User", UserSchema);
