import { UnidadController } from '../controllers/unidadController';
export class UnidadRoutes {
    private unidadController = new UnidadController();

    public routes(app): void {
        app.route('/unidad')
        .post(this.unidadController.crearUnidad)
        .get(this.unidadController.obtenerUnidad);

        app.route('/unidad/:id')
        .put(this.unidadController.actualizarUnidad)
        .delete(this.unidadController.eliminarUnidad);
    }
}