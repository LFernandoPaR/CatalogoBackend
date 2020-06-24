"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const SCHEMA = mongoose.Schema;
let ProveedorSchema = new SCHEMA({
    clave: {
        type: String,
        required: [true, 'clave requerida'],
        unique: [true, 'clave no válida']
    },
    proveedor: {
        type: String,
        required: [true, 'proveedor requerido']
    },
    atencion: {
        type: String,
        required: [true, 'atencion requerido']
    },
    direccion: {
        type: String,
        required: [true, 'direccion requerida'],
    },
    telefono: {
        type: String,
        required: [true, 'telefono requerido']
    },
    telefonoMovil: {
        type: String,
        required: [true, 'telefonoMovil requerido']
    },
    correoElectronico: {
        type: String,
        required: [true, 'correoElectronico requerido']
    },
});
const Proveedor = mongoose.model("Proveedor", ProveedorSchema);
exports.default = Proveedor;
//# sourceMappingURL=proveedorModels.js.map