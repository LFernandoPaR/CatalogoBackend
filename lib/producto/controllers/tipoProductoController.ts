import { Request, Response } from 'express';
import TipoProducto from '../models/tipoProductoModel';

export class TipoProductoController {

    public crearTipoProducto = (req: Request, res: Response) => {
        let tipoProducto = new TipoProducto(
            {
                clave: req.body.clave,
                tipoProducto: req.body.tipoProducto,
            }
        );
        tipoProducto.save((err, tipoProducto) => {
            if (err) {
                return res.status(400).json(
                    {
                        ok: false,
                        message: 'Tipo Producto no creado'
                    }
                );                
            }
            res.status(200).json(
                {
                    ok: true,
                    message: 'Tipo Producto creado',
                    tipoProducto
                }
            )
        })
    }

    public obtenerTipoProducto = (req: Request, res: Response) => {
        TipoProducto.find({})
        .select('clave tipoProducto')
        .exec()
        .then(tipoProducto => {
            res.status(200).json({
                ok: true,
                tipoProducto
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

    
    public actualizarTipoProducto = (req: Request, res: Response) => {
        TipoProducto.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}, (err, tipoProductoActualizado) =>{
            if(err) {
                return res.status(400).json({
                    ok: false,
                    message: 'tipoProducto no actualizado',
                    error: err
                });
            }
            res.status(200).json({
                ok: true,
                tipoProductoActualizado,
                message: 'tipoProducto actualizado'
            });
        });
    }

    public eliminarTipoProducto = (req: Request, res: Response) => {
        TipoProducto.findByIDAndRemove(req.params.id)
        .then(eliminado => {
            res.status(200).json({
                ok: true,
                message: 'tipoProducto eliminado'
            });
        })
        .catch( err => {
            return res.status(400).json({
                ok: false,
                message: 'tipoProdcuto no eliminado',
                error: err
            });
        })
    }

}