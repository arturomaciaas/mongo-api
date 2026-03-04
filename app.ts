import express, { Application } from "express";
import usuarioRoutes from "./Routes/usuario";

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", usuarioRoutes);

export default app;
