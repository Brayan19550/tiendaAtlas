import Usuario from "../models/Usuario";
import bcrypt from "bcryptjs";
export const renderRegistro=(req, res) => {
    res.render("registro");
};
export const registrarUsuario=async(req, res) => {
    try {
        const {
            nombre,
            usuario,
            correo,
            password,
            confirmarPassword
        }=req.body;
        if (password !== confirmarPassword) {
            return res.render("registro",{
                error: "Las contraseñas no coinciden"
            });
        }
        const usuarioExiste=await Usuario.findOne({
            usuario
        });
        if (usuarioExiste) {
            return res.render("registro", {
                error: "El nombre de usuario ya está registrado"
            });
        }
        const correoExiste=await Usuario.findOne({
            correo
        });
        if (correoExiste) {
            return res.render("registro", {
                error: "El correo ya está registrado"
            });
        }
        const passwordEncriptada=await bcrypt.hash(password,10);
        const nuevoUsuario=new Usuario({
            nombre,
            usuario,
            correo,
            password: passwordEncriptada
        });
        await nuevoUsuario.save();
        res.redirect("/login");
    } catch (error) {
        console.log(error);
        res.render("registro", {
            error: "Ocurrió un error al registrar el usuario"
        });
    }
};