import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivoNotebook } from'src/app/entidades/activos/activo_notebook/activo-notebook';
import { ActivoNotebookService } from 'src/app/services/activos/activo_notebook/activo-notebook.service';
import { AlertService} from '../../../services/alert/alert.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Locacion } from 'src/app/entidades/locacion/locacion';
import { LocacionService } from 'src/app/services/locacion/locacion.service';
import { Usuario } from 'src/app/entidades/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-activo-notebook',
  templateUrl: './activo-notebook.component.html',
  styleUrls: ['./activo-notebook.component.css']
})
export class ActivoNotebookComponent implements OnInit {
  p:number = 1;
  //Array de ubicaciones
  listadoLocaciones : Locacion[] =[];
  //Array de activos celulares
  listadoActivoNotebook: ActivoNotebook[] = [];
  //Array de usuarios
  listadoUsuario : Usuario[] = [];
  //Buscar activo
  buscar_activo = "";
  // Variables Botones
  public btnGuardar = false;
  public btnEditar = false;
  public btnCancelar = false;

  constructor(
    private servicioActivoNotebook: ActivoNotebookService,
    private servicioLocacion: LocacionService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private alertas : AlertService,
    private servicioUsuario : UsuarioService,
  ) { }

  ngOnInit(): void {
    this.getActivoNotebook();
    this.getLocaciones();
    this.getUsuario();
  }

  //Formulario reactiovo para el registro
  formularioRegistro= this.formBuilder.group({
    id:[''],
    inventario:['',[Validators.required]],
    marca:['',[Validators.required]],
    modelo:['',[Validators.required]],
    serie:['',[Validators.required]],
    hostname:['',[Validators.required]],
    tag:['',[Validators.required]],
    costo:['',[Validators.required]],
    estado:['',[Validators.required]],
    fecha_entrega:['',[Validators.required]],
    usuario:['',[Validators.required]],
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
  //Get de Usuarios
  getUsuario():void {
    this.servicioUsuario.getUsuario().subscribe(
      (res) => {
        this.listadoUsuario = res;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getActivoNotebook():void {
    this.servicioActivoNotebook.getActivoNotebook().subscribe(
      (res) => {
        this.listadoActivoNotebook = res;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  registrarActivoNotebook() : void{
    if(this.formularioRegistro.valid)
    {
      this.servicioActivoNotebook.registrarActivoNotebook(this.formularioRegistro.value).subscribe(
        (res) => {
          console.log(res)
          this.cerrarModal();
          this.getActivoNotebook();
          this.alertas.alertsuccess();
        },
        (error) => {
          this.alertas.alerterror();
        }
      )
    }else{
      this.alertas.alertcampos();
    }
  }

  ActivoNotebookId(activo_notebook : ActivoNotebook, content : any): void {
    this.btnEditar = false;
  this.btnGuardar = true;
  this.modalService.open(content,{size:'lg'});
  this.servicioActivoNotebook.getActivoNotebookId(activo_notebook).subscribe(
    (res) => {
      this.formularioRegistro.patchValue({
        id: res[0].id,
        inventario: res[0].inventario,
        marca: res[0].marca,
        modelo: res[0].modelo,
        serie: res[0].serie,
        hostname: res[0].hostname,
        tag: res[0].tag,
        costo: res[0].costo,
        estado: res[0].estado,
        fecha_entrega: res[0].fecha_entrega,
        usuario: res[0].usuario,
        locacion: res[0].locacion,
      });
    },
    (error) => {
      console.log(error);
    }
  )
  }

  editarActivoNotebook() : void{
    this.servicioActivoNotebook.editarActivoNotebook(this.formularioRegistro.value, this.formularioRegistro.value.id).subscribe(
      (res) => {
        console.log(res)
        this.alertas.alertedit();
        this.getActivoNotebook();
        this.cerrarModal();
      },
      (error) => {
        console.log(error)
        this.alertas.alerterror();
      }
    )
  }

  eliminarActivoNotebook(activo_notebook: ActivoNotebook): void {

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
        this.servicioActivoNotebook.eliminarActivoNotebook(activo_notebook.id).subscribe(
          (res) => {
          this.getActivoNotebook();
    });
        Swal.fire('Eliminado!', 'Se eleccion ha sido eliminada.', 'success');
      }

    });
}

// Funcion cancelar solo para borrar los valores de formulario reactivo
cancelar(): void{
  this.formularioRegistro.reset();
}

}
