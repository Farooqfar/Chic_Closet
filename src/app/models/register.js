import mongoose from "mongoose";
import bcrypt from "bcrypt";
const registerSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isUserVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

registerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

registerSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const registerUser =
  mongoose.models.registerUser ||
  mongoose.model("registerUser", registerSchema);

export default registerUser;
