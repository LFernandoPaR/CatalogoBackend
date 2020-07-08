import { UsuarioRoutes } from "usuario/routers/usuarioRoutes";
import { UnidadRoutes } from './unidad/routers/unidadRoutes';
import { ProveedorRoutes } from './proveedor/routers/proveedorRoutes';

export class Routes {
    private usuarioRoutes = new UsuarioRoutes();
    private unidadRoutes = new UnidadRoutes
    private proveedorRoutes = new ProveedorRoutes

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.unidadRoutes.routes(app);
        this.proveedorRoutes.routes(app);
    }
}