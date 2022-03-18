import {Locacion} from'../../locacion/locacion';
import { Usuario } from '../../usuario/usuario';
export class ActivoNotebook {
  id=0;
  inventario =0;
  marca = "";
  modelo = "";
  serie = "";
  hostname = "";
  tag = "";
  costo=0;
  estado = "";
  fecha_entrega = new Date();
  locacion : Locacion;
  usuario: Usuario;
}
