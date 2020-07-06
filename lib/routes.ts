import { UsuarioRoutes } from "usuario/routers/usuarioRoutes";

export class Routes {
    private usuarioRoutes = new UsuarioRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
    }
}