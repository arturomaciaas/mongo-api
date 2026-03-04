"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../Controllers/usuario");
const api = (0, express_1.Router)();
api.get("/pruebas", usuario_1.pruebas);
api.get("/getUsuarios", usuario_1.getUsuarios);
api.post("/usuario", usuario_1.saveUsuario);
exports.default = api;
//# sourceMappingURL=usuario.js.map