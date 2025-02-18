import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Ensure it's "name"
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);
// Prevents model re-registration issue in Next.js
export default mongoose.models.User || mongoose.model("User", UserSchema);
