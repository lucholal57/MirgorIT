import {Locacion} from '../../locacion/locacion';
export class Activo {
    id = 0;
    inventario = 0;
    descripcion = "";
    marca = "";
    modelo = "";
    serie = "";
    hostname = "";
    dpi =0;
    ip=0;
    costo=0;
    estado = "";
    fecha_mantenimiento = new Date();
    locacion : Locacion
}
