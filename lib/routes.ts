import { UsuarioRoutes } from "usuario/routers/usuarioRoutes";
import { UnidadRoutes } from './unidad/routers/unidadRoutes';
import { ProveedorRoutes } from './proveedor/routers/proveedorRoutes';
import { TipoProductoRoutes } from './producto/routers/tipoProductoRoutes';
import { ProductoRoutes } from './producto/routers/productoRoutes';

export class Routes {
    private usuarioRoutes = new UsuarioRoutes();
    private unidadRoutes = new UnidadRoutes
    private proveedorRoutes = new ProveedorRoutes
    private tipoProductoRoutes = new TipoProductoRoutes
    private productoRoutes = new ProductoRoutes

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.unidadRoutes.routes(app);
        this.proveedorRoutes.routes(app);
        this.tipoProductoRoutes.routes(app);
        this.productoRoutes.routes(app);
    }
}