import express  from "express";
import indexRoutes from './routes/indexRoutes';
import exphbs  from "express-handlebars";
import path from "path";
import morgan from "morgan";
const app=express();
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
app.use(express.urlencoded({extended: false}));
app.use(indexRoutes);
app.use(express.static(path.join(__dirname,"frontend")));
export default app;