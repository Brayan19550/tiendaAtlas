export const verificarSesion=(req, res, next) => {
    res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    res.setHeader("Pragma","no-cache");
    res.setHeader("Expires","0");
    if (req.session.usuario) {
        return next();
    }
    res.redirect("/login");
};