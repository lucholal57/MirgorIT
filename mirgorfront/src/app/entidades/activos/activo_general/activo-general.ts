import { Locacion } from "../../locacion/locacion";
export class ActivoGeneral {
  id=0;
  inventario=0;
  descripcion="";
  marca="";
  modelo = "";
  serie = "";
  costo = 0;
  estado = "";
  fecha_mantenimiento= new Date();
  locacion: Locacion
}
