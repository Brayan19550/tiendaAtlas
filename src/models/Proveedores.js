import { Schema, model } from "mongoose";
const proveedorEsquema=new Schema(
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
    rfc: {
      type: String,
      trim: true,
      uppercase: true,
      maxLength: 13
    },
    condicionesPago: {
      type: String,
      trim: true
    },
    calificacion: {
      type: Number,
      min: 1,
      max: 5
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