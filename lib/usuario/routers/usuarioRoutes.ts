import { UsuarioController } from '../controllers/usuarioController';
export class UsuarioRoutes {
    private usuarioController = new UsuarioController();

    public routes(app): void {
        app.route('/usuario')
        .post(this.usuarioController.crearUsuario)
        .get(this.usuarioController.obtenerUsuarios);

        app.route('/ingresar').post(this.usuarioController.ingresar);
        app.route('/usuario/:id')
        .put(this.usuarioController.actualizarUsuario)
        .delete(this.usuarioController.eliminarUsuario);
    } 
}