import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Activo } from 'src/app/entidades/activo/activo';
import { ActivoService } from 'src/app/services/activo/activo.service';
//Agregar las alertas aqui

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ActivoComponent implements OnInit {
  p:number = 1;
  //Array de Activos
  listadoActivos :Activo[] =[];
  //Buscar activo
  buscar_activo = "";

  constructor(
    private servicioActivo: ActivoService,
    private formBuilder : FormBuilder,
    private modalService: NgbModal,
    config: NgbModalConfig
    ) { }

  ngOnInit(): void {
    this.getActivos();
  }

  //Formulario Registro 
  formularioRegistro= this.formBuilder.group({
    id:[''],
    numero_inventario:['',[Validators.required]],
    numero_serie:['',[Validators.required]],
    descripcion:['',[Validators.required]],
    estado:['',[Validators.required]],
    hostname:['',[Validators.required]],
    tipo:['',[Validators.required]],
    fabricante:['',[Validators.required]],
    modelo:['',[Validators.required]],
    unidad_negocio:['',[Validators.required]],
    planta:['',[Validators.required]]
  })

  //Open funcion para abrir ventana modal
  open(content:any) {
    this.modalService.open(content,{size:'lg',backdrop: 'static'});
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
  registrarActivos():void{
    this.servicioActivo.registrarActivo(this.formularioRegistro.value).subscribe(
      (res) => {
        console.log(res)
        this.cerrarModal();
        this.getActivos();
      },
      (error) => {
        console.log(error)
        this.getActivos();
      }
    )
  }

  // Obtener alumno por id para mostrar los campos en los input para su proxima edicion
  ActivoId(activo:Activo, content : any): void {
    this.modalService.open(content,{size:'lg'});
   
    this.servicioActivo.getActivoId(activo).subscribe(
      (res) => {
        this.formularioRegistro.patchValue({
          id: res[0].id,
          numero_inventario: res[0].numero_inventario,
          numero_serie: res[0].numero_serie,
          descripcion: res[0].descripcion,
          estado: res[0].estado,
          hostname: res[0].hostname,
          tipo: res[0].tipo,
          fabricante: res[0].fabricante,
          modelo: res[0].modelo,
          unidad_negocio: res[0].unidad_negocio,
          planta: res[0].planta
        });
       
      },
      (error) => {
        console.log();
      }
    );
  }

}
