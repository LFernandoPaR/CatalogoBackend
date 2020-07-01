import { Request } from 'express';
import Usuario from '../models/usuarioModels';
import * as bcrypt from 'bcryptjs';
import { exec } from 'child_process';
import { DefaultSerializer } from 'v8';

export class UsuarioController {
    public crearUsuario = (req: Request, res: Response) => {
        let usuario = new Usuario(
            {
                apellidoPaterno: req.body.apellidoPaterno,
                apellidoMaterno: req.body.apellidoMaterno,
                nombre: req.body.nombre,
                login: req.body.login,
                password: bcrypt.hashSync(req.body.password, 10) 
            }
        );
        usuario.save((err, usuarioCreado) => {
            if (err) {
                res.status(400).json(
                    {
                        ok: false,
                        message: 'Usuario no creado',
                        error: err

                    }
                );
            }
            res.status(201).json({
                ok: true,
                message: 'Usuario creado',
                usuario: usuarioCreado
            });
        }
    )};

    public obtenerUsuarios = (req: Request, res: Response) => {
        Usuario.find()
        .select('apellidoPaterno apellidoMaterno nombre')
        .exec()
        .then(usuarios => {
            res.status(200).json(
                {
                ok: true,
                usuarios
                }
            )
        })
        .catch(error => {
            res.status(400).json(
                {
                ok: false,
                error
                }
            )
        });
    }

    public ingresar = (req: Request, res: Response) => {
        Usuario.findOne({login: req.body.login})
        .exec()
        .then(usuario =>{
            if (!usuario){
                res.status(401).json(
                    {
                    ok: false,
                    message: 'Usuario no autorizado'
                    }
                    )
            } else {
                if(bcrypt.compareSync(req.body.password, usuario.password)){
                    res.status(200).json(
                        {
                        ok: true,
                        message: 'Usuario autorizado'
                        });
                }else {
                    return res.status(400).json(
                        {
                        ok: false,
                        message: 'Usuario no autorizado'
                        }
                        );
                }
            }
        })
        .catch(error => {
            return res.status(400).json(
                {
                ok: false,
                message: 'Usuario no autorizado'
                }
                );
        });
    }
}