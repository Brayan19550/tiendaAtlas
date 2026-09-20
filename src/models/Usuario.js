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
        },
        rol: {
            type: String,
            enum: ["administrador","usuario"],
            default: "usuario"
        },
        estado: {
            type: Boolean,
            default: true
        },
        permisos: {
            productos: {
                ver: {
                    type: Boolean,
                    default: true
                },
                agregar: {
                    type: Boolean,
                    default: false
                },
                actualizar: {
                    type: Boolean,
                    default: false
                },
                eliminar: {
                    type: Boolean,
                    default: false
                }
            },
            proveedores: {
                ver: {
                    type: Boolean,
                    default: true
                },
                agregar: {
                    type: Boolean,
                    default: false
                },
                actualizar: {
                    type: Boolean,
                    default: false
                },
                eliminar: {
                    type: Boolean,
                    default: false
                }
            }
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default mongoose.model("Usuario",usuarioSchema);