import { ProveedorController } from '../controllers/proveedorController';
export class ProveedorRoutes {
    private proveedorController = new ProveedorController();

    public routes(app): void {
        app.route('/proveedor')
        .post(this.proveedorController.crearProveedor)
        .get(this.proveedorController.obtenerProveedor);

        app.route('/proveedor/:id')
        .put(this.proveedorController.actualizarProveedor)
        .delete(this.proveedorController.eliminarProveedor);
    }
}