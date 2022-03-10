import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Linea } from 'src/app/entidades/linea/linea';
import { LineaService } from 'src/app/services/linea/linea.service';
//Agregar las alertas aqui
import { AlertService} from '../../services/alert/alert.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Activo } from 'src/app/entidades/activo/activo';
import { ActivoService } from 'src/app/services/activo/activo.service';


@Component({
  selector: 'app-Linea',
  templateUrl: './Linea.component.html',
  styleUrls: ['./Linea.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class LineaComponent implements OnInit {
  p:number = 1;
  //Array de Lineas
  listadoLineas :Linea[] =[];
  //Array de Activos
  listadoActivos :Activo[] =[]
  //Buscar Linea
  buscar_linea = "";
  //Puesto seleccionado
  seleccion_puesto = "";
    // Variables Botones
    public btnGuardar = false;
    public btnEditar = false;
    public btnCancelar = false;

  constructor(
    private servicioLinea: LineaService,
    private formBuilder : FormBuilder,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private alertas : AlertService,
    private servicioActivo : ActivoService
    ) { }

  ngOnInit(): void {
    this.getLineas();
    this.getActivos();
  }

  //Formulario Registro 
  formularioRegistro= this.formBuilder.group({
    id:[''],
    nombre:['',[Validators.required]],
    puesto:['',[Validators.required]],
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
  seleccionpuerto(){

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
  
  getLineas(): void{
    this.servicioLinea.getLineas().subscribe(
      (res) => {
        this.listadoLineas = res;
      },
    (error) => {
      console.log(error)
    }
    )
  }
  registrarLineas():void{
    console.log(this.formularioRegistro.value.id)
    if(this.formularioRegistro.valid)
    {
      this.servicioLinea.registrarLinea(this.formularioRegistro.value).subscribe(
        (res) => {
          console.log(res)
          this.cerrarModal();
          this.getLineas();
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

  // Obtener Linea por id para mostrar los campos en los input para su proxima edicion
  LineaId(linea:Linea, content : any): void {
    this.btnEditar = false;
    this.btnGuardar = true;
    this.modalService.open(content,{size:'lg'});
    this.servicioLinea.getLineaId(linea).subscribe(
      (res) => {
        this.formularioRegistro.patchValue({
          id: res[0].id,
          nombre: res[0].nombre,
          puesto: res[0].puesto,
          activo: res[0].activo
        });
       
      },
      (error) => {
        console.log();
      }
    );
  }

  // Editar Linea ya obtenido por el ID
  editarLineaId(): void {
    console.log(this.formularioRegistro.value.id)
      this.servicioLinea.editarLinea(this.formularioRegistro.value, this.formularioRegistro.value.id)
      .subscribe(
        (res) => {
          console.log(res)
          this.alertas.alertedit();
          this.getLineas();
          this.cerrarModal();
        },
        (error) => {
          console.log(error)
          this.alertas.alerterror();
        }
      );
  }

   // Eliminar alumno enviado por id
   eliminarLinea(linea: Linea): void {

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
        this.servicioLinea.eliminarLinea(linea.id).subscribe(
          (res) => {
          this.getLineas();
    });
        Swal.fire('Eliminado!', 'Se eleccion ha sido eliminada.', 'success');
      }

    });
}
// Busqueda de acompañantes por alumno
busquedaLinea(): void{
  if (this.buscar_linea== ""){
    this.alertas.alertcampos();
  }else{
    this.servicioLinea.busquedaLinea(this.buscar_linea).subscribe(
      (res) => {
        console.log(res)
        if (res.length != 0){
          this.alertas.alertLoading();
        }else{
          this.alertas.alertLoadingError();
        }
        this.listadoLineas= res;
      },
      (error) => {
        this.alertas.alerterror();
      }
    )
  }
}

// Funcion para cancelar busqueda por alumno
cancelarbusquedaLinea(): void {
  this.getLineas();
  this.buscar_linea = "";
}



 // Funcion cancelar solo para borrar los valores de formulario reLinea
 cancelar(): void{
  this.formularioRegistro.reset();
}
}
