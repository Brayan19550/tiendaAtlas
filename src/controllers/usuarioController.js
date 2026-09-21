import Usuario from "../models/Usuario.js";
export const mostrarUsuarios = async (req, res) => {
    try {
        const usuarios=await Usuario.find().lean();
        res.render("usuarios", {
            usuarios
        });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", {
            mensaje: "Error al cargar los usuarios."
        });
    }
};
export const actualizarPermisos=async (req, res) => {
    try {
        const {id}=req.params;
        const {
            rol,
            productos_agregar,
            productos_actualizar,
            productos_eliminar,
            proveedores_agregar,
            proveedores_actualizar,
            proveedores_eliminar
        }=req.body;
        const usuarioModificar=await Usuario.findById(id);
        if (!usuarioModificar) {
            return res.status(404).render("error", {
                mensaje: "El usuario no existe."
            });
        }
        if (
            req.session.usuario.id.toString() === id &&
            rol !== "administrador"
        ) {
            return res.status(403).render("error", {
                mensaje: "No puedes quitarte a ti mismo el rol de administrador."
            });
        }
        const permisos={
            productos: {
                ver: true,
                agregar: productos_agregar === "true",
                actualizar: productos_actualizar === "true",
                eliminar: productos_eliminar === "true"
            },
            proveedores: {
                ver: true,
                agregar: proveedores_agregar === "true",
                actualizar: proveedores_actualizar === "true",
                eliminar: proveedores_eliminar === "true"
            }
        };
        await Usuario.findByIdAndUpdate(id, {
            rol,
            permisos
        });
        res.redirect("/usuarios");
    } catch (error) {
        console.error(error);
        res.status(500).render("error", {
            mensaje: "Error al actualizar los permisos del usuario."
        });
    }
};