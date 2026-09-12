import { Schema, model } from "mongoose";
const proveedorEsquema = new Schema(
  {
    nombreEmpresa: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    contactoNombre: {
      type: String,
      required: true,
      trim: true
    },
    telefono: {
      type: String,
      required: true,
      trim: true
    },
    correo: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    direccion: {
      type: String,
      required: true
    },
    activo: {
      type: Boolean,
      default: true
    },
    opcion: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
export default model("Proveedores", proveedorEsquema);