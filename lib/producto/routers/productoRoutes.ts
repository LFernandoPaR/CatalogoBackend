import { ProductoController } from '../controllers/productoController';
export class ProductoRoutes {
    private productoController = new ProductoController

    public routes(app): void {
        app.route('/producto')
        .post(this.productoController.crearProducto)
        .get(this.productoController.obtenerProducto);

        app.route('/producto/:id')
        .put(this.productoController.actualizarProducto)
        .delete(this.productoController.eliminarProducto);
    }
}