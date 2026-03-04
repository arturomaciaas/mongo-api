import { Router } from "express";
import { pruebas, saveUsuario, getUsuarios, updateUsuario, deleteUsuario } from "../Controllers/usuario";

const api = Router();

api.get("/pruebas", pruebas);
api.get("/getUsuarios", getUsuarios);
api.post("/usuario", saveUsuario);
api.put("/usuario/:id", updateUsuario);
api.delete("/usuario/:id", deleteUsuario);

export default api;
