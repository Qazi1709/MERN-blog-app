import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
    },
    { timestamps: true }

);

const RegisterModel = mongoose.model("Register", RegisterSchema);
export default RegisterModel;