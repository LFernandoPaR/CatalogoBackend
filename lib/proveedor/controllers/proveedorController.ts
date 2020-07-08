import { Request, Response } from 'express';
import Proveedor from '../models/proveedorModels';

export class ProveedorController {
    public crearProveedor = (req: Request, res: Response) => {
        let proveedor = new Proveedor (
            {
                clave: req.body.clave,
                proveedor: req.body.proveedor,
                atencion: req.body.atencion,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                telefonoMovil: req.body.telefonoMovil,
                correoElectronico: req.body.correoElectronico
            }
        );
        proveedor.save((err, proveedorCreado) => {
            if (err) {
                res.status(400).json(
                    {
                        ok: false,
                        message: 'proveedor no creado',
                        error: err
                    }
                );
            }
            res.status(201).json(
                {
                    ok: true,
                    message: 'proveedor creado',
                    proveedor: proveedorCreado
                }
            )
        });
    }

    public obtenerProveedor = (req: Request, res: Response) => {
        Proveedor.find({})
        .select('clave proveedor atencion direccion telefono telefonoMovil correoElectronico')
        .exec()
        .then(proveedores => {
            res.status(200).json({
                ok: true,
                proveedores
            })
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

    public actualizarProveedor = (req: Request, res: Response) => {
        Proveedor.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}, (err, proveedorActualizado)=> {
            if(err) {
                return res.status(400).json({
                    ok: false,
                    message: 'proveedor no actualizado',
                    error: err
                });
            }
            res.status(200).json({
                ok: true,
                proveedorActualizado,
                message: 'proveedor actualizado'
            });
        });
    }

    public eliminarProveedor = (req: Request, res: Response) => {
        Proveedor.findByIdAndRemove(req.params.id)
        .then(eliminado => {
            res.status(200).json({
                ok: true, 
                message: 'proveedor eliminado'
            });
        })
        .catch( err => {
            return res.status(400).json({
                ok: false,
                message: 'proveedor no eliminado',
                error: err
            });
        })
    }
}