import express  from "express";
import indexRoutes from './routes/indexRoutes';
import exphbs  from "express-handlebars";
import path from "path";
import morgan from "morgan";
import handlebars from "handlebars";
import session from "express-session";
const app=express();
handlebars.registerHelper("eq",function(a,b) {
    return a===b;
});
app.set("views",path.join(__dirname,"views"));
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"),"layouts"),
        defaultLayout: "main",
        extname: ".hbs"
    })
);
app.set("view engine",".hbs");
app.use(morgan('dev'));
app.use(
    session({
        secret: process.env.SESSION_SECRET || "mongotienda_secreto",
        resave: false,
        saveUninitialized: false
    })
);
app.use(express.urlencoded({extended: false}));
app.use(indexRoutes);
app.use(express.static(path.join(__dirname,"frontend")));
export default app;