import Productos from "../models/Productos";
export const renderProductos=async(req, res) => {
    try {
        const productos=await Productos.find().lean();
        res.render("productos/index", { productos });
    } catch (error) {
        console.log(error);
    }
};
export const createProductos=async(req, res) => {
    try {
        const productos = Productos(req.body);
        await productos.save();
        res.redirect("/productos");
    } catch (error) {
        console.log(error);
    }
};
export const renderEditProducto=async(req, res) => {
    try {
        const productos=await Productos.findById(req.params.id).lean();
        res.render("editar",{productos});
    } catch (error) {
        console.log(error.message);
    }
};
export const updateProductos=async(req, res) => {
    const {id}=req.params;
    await Productos.findByIdAndUpdate(id,req.body);
    res.redirect("/productos");
};
export const deleteProductos=async(req, res) => {
    const {id}=req.params;
    await Productos.findByIdAndDelete(id);
    res.redirect("/productos");
};
export const statusProductos=async (req,res) => {
    const {id}=req.params;
    const productos=await Productos.findById(id);
    productos.opcion=!productos.opcion;
    await productos.save();
    res.redirect("/productos");
};