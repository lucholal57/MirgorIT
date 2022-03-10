import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Locacion } from 'src/app/entidades/locacion/locacion';
import { LocacionService } from 'src/app/services/locacion/locacion.service';
//Agregar las alertas aqui
import { AlertService} from '../../services/alert/alert.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Activo } from 'src/app/entidades/activo/activo';
import { ActivoService } from 'src/app/services/activo/activo.service';


@Component({
  selector: 'app-Locacion',
  templateUrl: './Locacion.component.html',
  styleUrls: ['./Locacion.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class LocacionComponent implements OnInit {
  p:number = 1;
  //Array de Locacions
  listadoLocaciones :Locacion[] =[];
  //Array de Activos
  listadoActivos :Activo[] =[]
  //Buscar 
  buscar_locacion = "";
    // Variables Botones
    public btnGuardar = false;
    public btnEditar = false;
    public btnCancelar = false;

  constructor(
    private servicioLocacion: LocacionService,
    private formBuilder : FormBuilder,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private alertas : AlertService,
    private servicioActivo : ActivoService
    ) { }

  ngOnInit(): void {
    this.getLocaciones();
    this.getActivos();
  }

  //Formulario Registro 
  formularioRegistro= this.formBuilder.group({
    id:[''],
    nombre:['',[Validators.required]],
    activo:['',[Validators.required]]
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
  getActivos(): void{
    this.servicioActivo.getActivos().subscribe(
      (res) => {
        this.listadoActivos = res;
      },
    (error) => {
      console.log(error)
    }
    )
  }
  
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
  registrarLocaciones():void{
    console.log(this.formularioRegistro.value.id)
    if(this.formularioRegistro.valid)
    {
      this.servicioLocacion.registrarLocacion(this.formularioRegistro.value).subscribe(
        (res) => {
          console.log(res)
          this.cerrarModal();
          this.getLocaciones();
          this.alertas.alertsuccess();
        },
        (error) => {
          console.log(error)
          this.alertas.alerterror();
        }
      )
    }
    else{
      this.alertas.alertcampos();
    }
    
  }

  // Obtener Locacion por id para mostrar los campos en los input para su proxima edicion
  LocacionId(locacion:Locacion, content : any): void {
    this.btnEditar = false;
    this.btnGuardar = true;
    this.modalService.open(content,{size:'lg'});
    this.servicioLocacion.getLocacionId(locacion).subscribe(
      (res) => {
        this.formularioRegistro.patchValue({
          id: res[0].id,
          nombre: res[0].nombre,
          activo: res[0].activo
        });
       
      },
      (error) => {
        console.log();
      }
    );
  }

  // Editar Locacion ya obtenido por el ID
  editarLocacionId(): void {
    console.log(this.formularioRegistro.value.id)
      this.servicioLocacion.editarLocacion(this.formularioRegistro.value, this.formularioRegistro.value.id)
      .subscribe(
        (res) => {
          console.log(res)
          this.alertas.alertedit();
          this.getLocaciones();
          this.cerrarModal();
        },
        (error) => {
          console.log(error)
          this.alertas.alerterror();
        }
      );
  }

   // Eliminar alumno enviado por id
   eliminarLocacion(Locacion: Locacion): void {

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
        this.servicioLocacion.eliminarLocacion(Locacion.id).subscribe(
          (res) => {
          this.getLocaciones();
    });
        Swal.fire('Eliminado!', 'Se eleccion ha sido eliminada.', 'success');
      }

    });
}
// Busqueda de acompañantes por alumno
busquedaLocacion(): void{
  if (this.buscar_locacion== ""){
    this.alertas.alertcampos();
  }else{
    this.servicioLocacion.busquedaLocacion(this.buscar_locacion).subscribe(
      (res) => {
        console.log(res)
        if (res.length != 0){
          this.alertas.alertLoading();
        }else{
          this.alertas.alertLoadingError();
        }
        this.listadoLocaciones= res;
      },
      (error) => {
        this.alertas.alerterror();
      }
    )
  }
}

// Funcion para cancelar busqueda por alumno
cancelarbusquedaLocacion(): void {
  this.getLocaciones();
  this.buscar_locacion = "";
}



 // Funcion cancelar solo para borrar los valores de formulario reLocacion
 cancelar(): void{
  this.formularioRegistro.reset();
}
}
