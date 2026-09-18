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
            return res.render("registro", {
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
        const passwordEncriptada=await bcrypt.hash(password, 10);
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
export const renderLogin=(req, res) => {
    res.render("login");
};
export const loginUsuario = async (req, res) => {
    try {
        const {
            usuario,
            password
        }=req.body;
        const usuarioEncontrado = await Usuario.findOne({
            usuario
        });
        if (!usuarioEncontrado) {
            return res.render("login", {
                error: "Usuario o contraseña incorrectos"
            });
        }
        const passwordCorrecta = await bcrypt.compare(
            password,
            usuarioEncontrado.password
        );
        if (!passwordCorrecta) {
            return res.render("login", {
                error: "Usuario o contraseña incorrectos"
            });
        }
        req.session.usuario= {
            id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            usuario: usuarioEncontrado.usuario
        };
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.render("login", {
            error: "Ocurrió un error al iniciar sesión"
        });
    }
};