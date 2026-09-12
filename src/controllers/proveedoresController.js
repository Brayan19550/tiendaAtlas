import Proveedores from "../models/Proveedores";
export const renderProveedores=async (req, res) => {
    const proveedores=await Proveedores.find().lean();
    res.render("index",{proveedores: proveedores});
};
export const createProveedor=async (req, res) => {
    try {
        const nuevoProveedor=new Proveedores(req.body); 
        await nuevoProveedor.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};
export const renderEditProveedor=async(req,res) => {
    try {
        const proveedor=await Proveedores.findById(req.params.id).lean();
        res.render("editarProveedor",{proveedor});
    } catch (error) {
        console.log(error.message);
    }
};
export const updateProveedor=async(req,res) => {
    const {id}=req.params;
    try {
        await Proveedores.findByIdAndUpdate(id,req.body);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};
export const deleteProveedor=async(req,res) => {
    const {id}=req.params;
    try {
        await Proveedores.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};
export const statusProveedor=async(req,res) => {
    const {id}=req.params;
    try {
        const proveedor=await Proveedores.findById(id);
        proveedor.opcion=!proveedor.opcion;
        await proveedor.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};