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

}