import { Router } from "express";
import {
createProductos,
deleteProductos,
renderEditProducto,
renderProductos,
statusProductos,
updateProductos
} from "../controllers/productoController";
import {
createProveedor,
deleteProveedor,
renderEditProveedor,
renderProveedores,
statusProveedor,
updateProveedor
} from "../controllers/proveedoresController";
import {
renderRegistro,
registrarUsuario,
renderLogin,
loginUsuario,
logoutUsuario
} from "../controllers/authController";
import { verificarSesion } from "../middlewares/authMiddleware";
import {
mostrarUsuarios,
actualizarPermisos,
eliminarUsuario
} from "../controllers/usuarioController";
import { verificarAdministrador } from "../middlewares/adminMiddleware";
import { verificarPermiso } from "../middlewares/permisosMiddleware";
const router=Router();
router.get("/", (req, res) => {
res.render("index");
});
router.get("/registro", renderRegistro);
router.post("/registro", registrarUsuario);
router.get("/login", renderLogin);
router.post("/login", loginUsuario);
router.get("/logout", logoutUsuario);
router.get(
"/usuarios",
verificarAdministrador,
mostrarUsuarios
);
router.post(
"/usuarios/:id/permisos",
verificarAdministrador,
actualizarPermisos
);
router.get(
"/usuarios/:id/delete",
verificarAdministrador,
eliminarUsuario
);
router.get(
"/productos",
verificarSesion,
renderProductos
);
router.post(
"/productos/agregar",
verificarSesion,
verificarPermiso("productos", "agregar"),
createProductos
);
router.get(
"/productos/:id/update",
verificarSesion,
verificarPermiso("productos", "actualizar"),
renderEditProducto
);
router.post(
"/productos/:id/update",
verificarSesion,
verificarPermiso("productos", "actualizar"),
updateProductos
);
router.get(
"/productos/:id/delete",
verificarSesion,
verificarPermiso("productos", "eliminar"),
deleteProductos
);
router.get(
"/productos/:id/status",
verificarSesion,
verificarPermiso("productos", "actualizar"),
statusProductos
);
router.get(
"/proveedores",
verificarSesion,
renderProveedores
);
router.post(
"/proveedores/agregar",
verificarSesion,
verificarPermiso("proveedores", "agregar"),
createProveedor
);
router.get(
"/proveedores/:id/update",
verificarSesion,
verificarPermiso("proveedores", "actualizar"),
renderEditProveedor
);
router.post(
"/proveedores/:id/update",
verificarSesion,
verificarPermiso("proveedores", "actualizar"),
updateProveedor
);
router.get(
"/proveedores/:id/delete",
verificarSesion,
verificarPermiso("proveedores", "eliminar"),
deleteProveedor
);
router.get(
"/proveedores/:id/status",
verificarSesion,
verificarPermiso("proveedores", "actualizar"),
statusProveedor
);
export default router;