import { TipoProductoController } from '../controllers/tipoProductoController';
export class TipoProductoRoutes {
    private tipoProductoController = new TipoProductoController();

    public routes(app): void {
        app.route('/tipoProducto')
        .post(this.tipoProductoController.crearTipoProducto)
        .get(this.tipoProductoController.obtenerTipoProducto);

        app.route('/tipoProducto/:id')
        .put(this.tipoProductoController.actualizarTipoProducto)
        .delete(this.tipoProductoController.eliminarTipoProducto);
    }
}