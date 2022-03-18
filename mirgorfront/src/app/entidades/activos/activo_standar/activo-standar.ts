import {Locacion} from'../../locacion/locacion';
import { Usuario } from '../../usuario/usuario';
export class ActivoStandar {
  id=0;
  inventario =0;
  descripcion = "";
  marca = "";
  modelo = "";
  serie=0;
  hostname="";
  ip=0;
  mac="";
  area="";
  fecha_mantenimiento= new Date();
  costo = 0;
  estado = "";
  locacion : Locacion
  usuario : Usuario
}
