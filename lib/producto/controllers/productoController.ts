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
}    