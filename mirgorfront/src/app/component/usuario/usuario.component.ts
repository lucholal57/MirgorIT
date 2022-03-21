import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../entidades/usuario/usuario'
import { UsuarioService } from '../../services/usuario/usuario.service';
import { AlertService} from '../../services/alert/alert.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  p:number = 1;
  listadoUsuario : Usuario[]=[];
  //Buscar Usuario por nombre
  buscar_usuario="";
  // Variables Botones
  public btnGuardar = false;
  public btnEditar = false;
  public btnCancelar = false;

  constructor(
    private servicioUsuario : UsuarioService,
    private formBuilder : FormBuilder,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private alertas: AlertService
  ) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  formularioRegistro=this.formBuilder.group({
    id:[''],
    nombre:['',[Validators.required]],
    correo:['',[Validators.required]],
    area:['',[Validators.required]],
    posicion:['',[Validators.required]],
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

  registrarUsuario():void {
    console.log(this.formularioRegistro.value)
    if(this.formularioRegistro.valid)
    {
      this.servicioUsuario.registrarUsuario(this.formularioRegistro.value).subscribe(
        (res) => {
          console.log(res)
          this.cerrarModal();
          this.getUsuario();
          this.alertas.alertsuccess();
        },
        (error) => {
          console.log(error)
          this.alertas.alerterror();
        }
      )
    }else{
      this.alertas.alertcampos()
    }
  }
  UsuarioId(usuario:Usuario,content : any): void {
    this.btnEditar = false;
    this.btnGuardar = true;
    this.modalService.open(content,{size:'lg'});
    this.servicioUsuario.getUsuarioId(usuario).subscribe(
      (res) => {
        this.formularioRegistro.patchValue({
          id: res[0].id,
          nombre: res[0].nombre,
          correo: res[0].correo,
          area: res[0].area,
          posicion: res[0].posicion,
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  editarUsuarioId() : void{
    this.servicioUsuario.editarUsuario(this.formularioRegistro.value, this.formularioRegistro.value.id).subscribe(
      (res) => {
        console.log(res)
        this.alertas.alertedit();
        this.getUsuario();
        this.cerrarModal();
      },
      (error) => {
        console.log(error)
        this.alertas.alerterror();
      }
    )

  }

  // Eliminar alumno enviado por id
  eliminarUsuario(usuario: Usuario): void {

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
        this.servicioUsuario.eliminarUsuario(usuario.id).subscribe(
          (res) => {
          this.getUsuario();
    });
        Swal.fire('Eliminado!', 'Se eleccion ha sido eliminada.', 'success');
      }

    });
}

// Funcion cancelar solo para borrar los valores de formulario reactivo
cancelar(): void{
  this.formularioRegistro.reset();
}

// Busqueda de acompañantes por alumno
busquedaUsuario(): void{
  if (this.buscar_usuario== ""){
    this.alertas.alertcampos();
  }else{
    this.servicioUsuario.busquedaUsuario(this.buscar_usuario).subscribe(
      (res) => {
        console.log(res)
        if (res.length != 0){
          this.alertas.alertLoading();
        }else{
          this.alertas.alertLoadingError();
        }
        this.listadoUsuario= res;
      },
      (error) => {
        this.alertas.alerterror();
      }
    )
  }
}

// Funcion para cancelar busqueda por alumno
cancelarbusquedaUsuario(): void {
  this.getUsuario();
  this.buscar_usuario = "";
}






}
