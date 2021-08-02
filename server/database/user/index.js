import mongoose from "mongoose";

const UseSchema = new mongoose.Schema({
    fullname: { type: String, required:true },
    email: { type: String, required:true },
    password: { type: String },
    address: [{ detail: {type: String}, for: {type: String} }],
    phoneNumber: [{ type: Number }],
});

//converting to model
export const UserModel = mongoose.model("Users", UserSchema);
