import {Request, Response} from 'express'
import Unidad from '../models/unidadModel';
export class UnidadController{

    public crearUnidad = (req: Request, res: Response) => {
        let unidad = new Unidad({
            clave: req.body.clave,
            unidad: req.body.unidad
        });
        unidad.save((err, unidadCreada) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.status(201).json({
                ok: true,
                unidad: unidadCreada
            });
        });
    }

    public obtenerUnidad = (req: Request, res: Response) =>{
        Unidad.findById(req.params.id)
        .then((unidad) => {
            if(unidad){
                res.status(200).json({
                    ok: true,
                    unidad
                });
            }else{
                res.status(400).json({
                    ok: false,
                    message: 'unidad no encontrada'
                });
            }
        })
        .catch((err) => {
            res.status(400).json({
                ok: false,
                err
            }) 
        });
    }

    public actualizarUnidad = (req: Request, res: Response) => {
        Unidad.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true}, (err, unidadActualizada) => {
            if(err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Unidad no actualizada',
                    error: err
                });
            }
            res.status(200).json({
                ok: true,
                unidadActualizada,
                message: 'Unidad Actualizada'
            });
        });
    }

    public eliminarUnidad = (req: Request, res: Response) => {
        Unidad.findByIdAndRemove(req.params.id)
        .then(eliminado => {
            res.status(200).json({
                ok: true,
                message: 'Unidad eliminada'
            });
        })
        .cath(err => {
            return res.status(400).json({
                ok: false,
                message: 'Unidad no eliminada',
                error: err
            });
        })
    }
}