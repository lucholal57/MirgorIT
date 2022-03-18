import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivoCelular } from 'src/app/entidades/activos/activo_celular/activo-celular';
import { ActivoCelularService } from 'src/app/services/activos/activo_celular/activo-celular.service';
import { AlertService} from '../../../services/alert/alert.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Locacion } from 'src/app/entidades/locacion/locacion';
import { LocacionService } from 'src/app/services/locacion/locacion.service';
import { LineaTelefonica } from 'src/app/entidades/linea_telefonica/linea-telefonica';
import { Usuario } from 'src/app/entidades/usuario/usuario';


@Component({
  selector: 'app-activo-celular',
  templateUrl: './activo-celular.component.html',
  styleUrls: ['./activo-celular.component.css']
})
export class ActivoCelularComponent implements OnInit {
  p:number = 1;
  //Array de ubicaciones
  listadoLocaciones : Locacion[] =[];
  //Array de activos celulares
  listadoActivoCelular: ActivoCelular[] = [];
  //Array de lineas telefonicas
  listadoLineaTelefonicas: LineaTelefonica[] = [];
  //Array de usuarios
  listadoUsuario : Usuario[] = [];
  //Buscar activo
  buscar_activo = "";
  // Variables Botones
  public btnGuardar = false;
  public btnEditar = false;
  public btnCancelar = false;

  constructor(
    private servicioActivoCelular : ActivoCelularService,
    private servicioLocacion: LocacionService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private alertas : AlertService
  ) { }

  ngOnInit(): void {
    this.getLocaciones();
  }

  //Formulario registro
  formularioRegistro= this.formBuilder.group({
    id:[''],
    inventario:['',[Validators.required]],
    imei:['',[Validators.required]],
    marca:['',[Validators.required]],
    modelo:['',[Validators.required]],
    tag:['',[Validators.required]],
    costo:['',[Validators.required]],
    estado:['',[Validators.required]],
    fecha_entrega:[''],
    usuario:[''],
    linea_telefonica:[''],
    locacion:['',[Validators.required]],
  })

  //Open funcion para abrir ventana modal
  open(content:any) {
    this.modalService.open(content,{size:'lg',backdrop: 'static'});
    this.btnGuardar=false;
    this.btnEditar=true;
  }
  // Funcion para cerrar ventana modal
  cerrarModal(): void{
    this.modalService.dismissAll();
    this.formularioRegistro.reset();
  }

   //GEt locaciones para mostrar en el select
   getLocaciones(): void{
    this.servicioLocacion.getLocaciones().subscribe(
      (res) => {
        this.listadoLocaciones = res;
      },
    (error) => {
      console.log(error)
    }
    )
  }
 // Get CElulares
 getActivoCelular(): void{
   this.servicioActivoCelular.getActivoCelular().subscribe(
     (res) => {
        this.listadoActivoCelular = res;
     },
     (error) =>{
       console.log(error)
     }
   )
 }
 //Registrar Activos Celulares
 registrarActivoCelular():void{
   if (this.formularioRegistro.valid)
   {
     this.servicioActivoCelular.registrarActivoCelular(this.formularioRegistro.value).subscribe(
      (res) => {
        console.log(res)
          this.cerrarModal();
          this.getActivoCelular();
          this.alertas.alertsuccess();
      },
      (error) =>{
        this.alertas.alerterror();
      }
      )
   }
   else{
     this.alertas.alertcampos();
   }
 }

 //Obtenemos  en el modal por ID los datos del celular seleccionado para poder editarlo
 ActivoCelularId(activo_celular : ActivoCelular, content : any): void {
  this.btnEditar = false;
  this.btnGuardar = true;
  this.modalService.open(content,{size:'lg'});
  this.servicioActivoCelular.getActivoCelularId(activo_celular).subscribe(
    (res) =>{
      this.formularioRegistro.patchValue({
        id: res[0].id,
        inventario: res[0].inventario,
        imei: res[0].imei,
        marca: res[0].marca,
        modelo: res[0].modelo,
        tag: res[0].tag,
        costo: res[0].costo,
        estado: res[0].estado,
        fecha_entrega: res[0].fecha_entrega,
        usuario: res[0].usuario,
        linea_telefonica: res[0].linea_telefonica,
        locacion: res[0].locacion,
      });
    },
    (error) => {
      console.log(error)
    }
  )
 }

 //Editamos el celular selecciodo
 editarActivoCelular(): void{
   this.servicioActivoCelular.editarActivoCelular(this.formularioRegistro.value, this.formularioRegistro.value.id).subscribe(
     (res) => {
       console.log(res)
       this.alertas.alertedit();
       this.getActivoCelular();
       this.cerrarModal();
     },
     (error) => {
       console.log(error)
       this.alertas.alerterror();
     }
   );
 }

  // Eliminar Activo Celular por ID
  eliminarActivoCelular(activo_celular: ActivoCelular): void {

    Swal.fire({
      title: 'Esta seguro de eliminar??',
      text: 'No podra revertir el cambio!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioActivoCelular.eliminarActivoCelular(activo_celular.id).subscribe(
          (res) => {
          this.getActivoCelular();
    });
        Swal.fire('Eliminado!', 'Se eleccion ha sido eliminada.', 'success');
      }

    });
}

// Busqueda de acompañantes por alumno
busquedaActivo(): void{

}

// Funcion para cancelar busqueda por alumno
cancelarbusquedaActivo(): void {
  this.getActivoCelular();
  this.buscar_activo = "";
}


// Funcion cancelar solo para borrar los valores de formulario reactivo
cancelar(): void{
  this.formularioRegistro.reset();
}


}
