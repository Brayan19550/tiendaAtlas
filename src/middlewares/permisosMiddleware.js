export const verificarPermiso = (tipo, accion) => {
    return (req, res, next) => {
        if (!req.session.usuario) {
            return res.redirect("/login");
        }
        if (req.session.usuario.rol === "administrador") {
            return next();
        }
        const permisos=req.session.usuario.permisos;
        if (
            permisos &&
            permisos[tipo] &&
            permisos[tipo][accion] === true
        ) {
            return next();
        }
        return res.status(403).render("error", {
            mensaje: "No tienes permiso para realizar esta acción."
        });
    };
};