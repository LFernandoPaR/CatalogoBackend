"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const SCHEMA = mongoose.Schema;
let UsuarioSchema = new SCHEMA({
    apellidoPaterno: {
        type: String,
        required: [true, 'apellidoPaterno requerido']
    },
    apellidoMaterno: {
        type: String,
        required: [true, 'apellidoMaterno requerido']
    },
    nombre: {
        type: String,
        required: [true, 'nombre requerido']
    },
    login: {
        type: String,
        required: [true, 'login requerido'],
        unique: [true, 'login no válido']
    },
    password: {
        type: String,
        required: [true, 'passsword requerido']
    }
});
UsuarioSchema.method.toJSON = function () {
    let usuario = this;
    let usuarioObject = usuario.toObject();
    delete usuarioObject.login;
    delete usuarioObject.password;
};
const Usuario = mongoose.model("Usuario", UsuarioSchema);
exports.default = Usuario;
//# sourceMappingURL=usuarioModels.js.map