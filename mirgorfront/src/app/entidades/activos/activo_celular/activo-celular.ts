import {Usuario} from "../../usuario/usuario";
import { LineaTelefonica } from "../../linea_telefonica/linea-telefonica";
import { Locacion} from "../../locacion/locacion";
export class ActivoCelular {
  id=0;
  inventario =0;
  imei = 0;
  marca = "";
  modelo = "";
  tag = "";
  costo = 0;
  estado = "";
  fecha_entrega = new Date();
  usuario : Usuario;
  linea_telefonica : LineaTelefonica;
  locacion : Locacion;
}
