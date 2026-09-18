import mongoose from "mongoose";
const usuarioSchema=new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },

        usuario: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        correo: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default mongoose.model("Usuario",usuarioSchema);