"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarios = exports.saveUsuario = exports.pruebas = void 0;
const express_1 = require("express");
const usuario_1 = require("../Models/usuario");
const pruebas = (req, res) => {
    res.status(200).send({
        mensaje: "Buena ruta bro"
    });
};
exports.pruebas = pruebas;
const saveUsuario = async (req, res) => {
    const user = new usuario_1.Usuario();
    const params = req.body;
    user.nombre = params.nombre;
    user.edad = params.edad;
    user.profesion = params.profesion;
    try {
        await user.save();
        res.status(200).send({
            message: "Se guardó el registro mi bro"
        });
    }
    catch (err) {
        console.log(err);
    }
    ;
};
exports.saveUsuario = saveUsuario;
const getUsuarios = async (req, res) => {
    try {
        const usuarios = await usuario_1.Usuario.find();
        res.status(200).send({
            usuarios
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.getUsuarios = getUsuarios;
//# sourceMappingURL=usuario.js.map