import * as mongoose from 'mongoose';

const SCHEMA =  mongoose.Schema;

export interface IUnidad extends mongoose.Document{
    clave: string;
    unidad: string;
}

let UnidadSchema = new SCHEMA({
    clave: {
        type: String,
        required: [true, 'clave requeridad']
    },
    unidad: {
        type: String,
        required: [true, 'unidad requerida']
    }
});

const Unidad = mongoose.model<IUnidad>("Unidad", UnidadSchema);
export default Unidad;