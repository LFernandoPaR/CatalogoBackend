import * as mongoose from 'mongoose';

const SCHEMA =  mongoose.Schema;

export interface IProducto extends mongoose.Document{
    clave: string;
    descripcion: string;
    tipoProducto: string;
    precioPublico: number;
    unidadEntrada: string;
    unidadSalidad: string;
    paridad: number;
    proveedores: any[];
}

let ProductoSchema = new SCHEMA({
    clave: {
        type: String,
        unique: true,
        required: [true, 'clave requeridad']
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion requerida']
    },
    tipoProducto: {
        type: SCHEMA.Types.ObjectId,
        required: true,
        ref: 'TipoProducto'
    },
    precioPublico: {
        type: Number,
        required: [true, 'precionPublico requerido']
    },
    unidadEntrada: {
        type: SCHEMA.Types.ObjectId,
        required: true,
        ref: 'Unidad'
    },
    unidadSalida: {
        type: SCHEMA.Types.ObjectId,
        required: true,
        ref: 'Unidad'
    },
    paridad: {
        type: Number,
        required: [true, 'paridad requerida']
    },
    proveedores: [
        {
            proovedor: {
                type: SCHEMA.Types.ObjectId,
                required: true,
                ref: 'Proveedor'
            },
            costo: {
                type: Number,
                required: [true, 'costo requerido']
            }
        }
    ]
})

const Producto = mongoose.model<IProducto>("Producto", ProductoSchema);
export default Producto;