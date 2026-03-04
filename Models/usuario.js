"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    profesion: {
        type: String,
        required: true
    }
});
exports.Usuario = (0, mongoose_1.model)("usuario", usuarioSchema);
//# sourceMappingURL=usuario.js.map