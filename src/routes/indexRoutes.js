import { Router } from "express";
import Productos from '../models/Productos';
import { createProductos, deleteProductos, renderEditProducto, renderProductos, statusProductos, updateProductos } from "../controllers/productoController";
import Proveedores from '../models/Proveedores';
import { createProveedor, deleteProveedor, renderEditProveedor, renderProveedores, statusProveedor, updateProveedor } from "../controllers/proveedoresController";
import { renderRegistro, registrarUsuario } from "../controllers/authController";
const router=Router();
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/registro",renderRegistro);
router.get("/registro",registrarUsuario);
router.get("/productos",renderProductos);
router.post("/productos/agregar",createProductos);
router.get("/productos/:id/update",renderEditProducto);
router.post("/productos/:id/update",updateProductos);
router.get("/productos/:id/delete",deleteProductos);
router.get("/productos/:id/status",statusProductos);
router.get("/proveedores",renderProveedores);
router.post("/proveedores/agregar",createProveedor);
router.get("/proveedores/:id/update",renderEditProveedor);
router.post("/proveedores/:id/update",updateProveedor);
router.get("/proveedores/:id/delete",deleteProveedor);
router.get("/proveedores/:id/status",statusProveedor);
export default router;