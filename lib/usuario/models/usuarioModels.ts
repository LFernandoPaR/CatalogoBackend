import * as mongoose from 'mongoose';

const SCHEMA = mongoose.Schema;

export interface IUsuario extends mongoose.Document {
    apellidoPaterno: string;
    apellidoMaterno: string;
    nombre: string;
    login: string;
    password: string;
}

let UsuarioSchema = new SCHEMA(
    {
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
    }
);

UsuarioSchema.method.toJSON = function(){
    let usuario = this;
    let usuarioObject = usuario.toObject();
    delete usuarioObject.login;
    delete usuarioObject.password;
}

const Usuario = mongoose.model<IUsuario>("Usuario", UsuarioSchema);
export default Usuario;