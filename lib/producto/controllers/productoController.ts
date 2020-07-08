import { Request, Response } from 'express';
import Producto from '../models/productoModel';

export class ProductoController {
    public crearProducto = (req: Request, res: Response) => {
        let producto = new Producto(
            {
                clave: req.body.clave,
                descripcion: req.body.descripcion,
                tipoProducto: req.body.tipoProducto,
                precioPublico: req.body.precioPublico,
                unidadEntrada: req.body.unidadEntrada,
                unidadSalida: req.body.unidadSalida,
                paridad: req.body.paridad,
                proveedores: req.body.proveedores,
            }
        );
        producto.save((err,producto) => {
            if (err) {  
                return res.status(400).json({
                    ok: false,
                    message: 'Producto no creado'
                });
            } 
            res.status(200).json({
                ok: true,
                message: 'Producto creado',
                producto
            });
        });
    }

    public agregarProveedor = (req: Request, res: Response) => {
        Producto.findById(req.params.id)
        .then(producto => {
            if (!producto) {
                return res.status(400).json(
                    {
                        ok: false,
                        message: 'Producto no encontrado'
                    }
                );
            }
            producto.proveedores.push(
                (
                    {
                        proveedor: req.body.proveedor,
                        costo: req.body.costo
                    }
                )
            );
            Producto.findByIdAndUpdate(req.params.id,{ proveedores: producto.proveedores}, {new: true, upsert: true}, (err, producto) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        message: 'Proveedor no agregado',
                        error: err
                    });
                }
                res.status(200).json(
                    {
                        ok: true,
                        producto,
                        message: 'Proveedor agregado'
                    }
                );
            });        
        })
        .catch(err => {
            return res.status(400).json(
                {
                    ok: false,
                    message: 'Producto no encontrado',
                    error: err
                }
            );
        })
    }

    public obtenerProducto = (req: Request, res: Response) => {
        Producto.find({})
        .select('clave descripcion tipoProducto precioPublico unidadEntrada unidadSalida paridad')
        .exec()
        .then(productos => {
            res.status(200).json({
                ok: true,
                productos
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


    public actualizarProducto = (req: Request, res: Response) => {
        Producto.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}, (err, productoActualizado) =>{
            if(err) {
                return res.status(400).json({
                    ok: false,
                    message: 'producto actualizado',
                    error: err
                });
            }
            res.status(200).json({
                ok: true,
                productoActualizado,
                message: 'producto actualizado'
            });
        });
    }


    public eliminarProducto = (req: Request, res: Response) => {
        Producto.findByIDAndRemove(req.params.id)
        .then(eliminado => {
            res.status(200).json({
                ok: true,
                message: 'producto eliminado'
            });
        })
        .catch( err => {
            return res.status(400).json({
                ok: false,
                message: 'producto no eliminado',
                error: err
            });
        })
    }
}    