export const verificarAdministrador=(req, res, next) => {
    if (!req.session.usuario) {
        return res.redirect("/login");
    }
    if (req.session.usuario.rol !== "administrador") {
        return res.status(403).render("error", {
            mensaje: "Solo el administrador puede acceder a esta sección."
        });
    }
    next();
};