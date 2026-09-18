import Proveedores from "../models/Proveedores";
export const renderProveedores=async(req, res) => {
    try {
        const proveedores = await Proveedores.find().lean();
        res.render("proveedores/index",{proveedores});
    } catch (error) {
        console.log(error);
    }
};
export const createProveedor=async(req, res) => {
    try {
        const nuevoProveedor=new Proveedores(req.body);
        await nuevoProveedor.save();
        res.redirect("/proveedores");
    } catch (error) {
        console.log(error);
    }
};
export const renderEditProveedor=async(req, res) => {
    try {
        const proveedor=await Proveedores.findById(req.params.id).lean();
        res.render("editarpr",{proveedor});
    } catch (error) {
        console.log(error.message);
    }
};
export const updateProveedor=async(req, res) => {
    const {id}=req.params;
    try {
        await Proveedores.findByIdAndUpdate(id, req.body);
        res.redirect("/proveedores");
    } catch (error) {
        console.log(error);
    }
};
export const deleteProveedor=async(req, res) => {
    const { id }=req.params;
    try {
        await Proveedores.findByIdAndDelete(id);
        res.redirect("/proveedores");
    } catch (error) {
        console.log(error);
    }
};
export const statusProveedor=async(req, res) => {
    const {id}=req.params;
    try {
        const proveedor=await Proveedores.findById(id);
        proveedor.opcion=!proveedor.opcion;
        await proveedor.save();
        res.redirect("/proveedores");
    } catch (error) {
        console.log(error);
    }
};