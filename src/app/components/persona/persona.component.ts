import { getLocaleDayPeriods } from '@angular/common';
import { Component, KeyValueDiffers, NgModule, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

//import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  //usuario?: Usuario;

  formularioPersona;
  sexo!: string;
  arraysexo: string[] = ['Hombre', 'Mujer', 'Otro', 'No especificado'];
  nombre!: string
  apellidos?:string

  dni: any = /^[A-Va-w][0-9]{8}[A-Z]$|^[0-9]{7}[0-9A-Ja]$/;
  arrayPersonas: FormGroup[] = [];

  constructor(private fb: FormBuilder) {
    /*  this.formularioPersona = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      edad: new FormControl(''),
      dni:new FormControl(''),
      cumple: new FormControl(''),
      color_favorito:new FormControl(''),
      //sexo: new FormControl(''),
    });*/
    this.formularioPersona = fb.group({
      nombre: [''],
      apellidos: [''],
      edad: [''],
      dni:[''],
      cumple: [''],
      color_favorito: [''],
      sexo: ['']
    });

  }

  /* public setArrayPersonas(value: FormGroup[]) {
    this.arrayPersonas = value;
  }
  public getFormularioPersona(): FormGroup {
    return this.formularioPersona;
  }
  public setFormularioPersona(value: FormGroup) {
    this.formularioPersona = value;
  }*/

  ngOnInit(): void {
    //this.formularioPersona = this.initForm();
  }

/*  initForm(): FormGroup {
    return this.fb.group({
      nombre: [''],
      apellidos: [''],
      edad: [''],
      dni:[''],
      cumple: [''],
      color_favorito: [''],
      sexo: ['']
    });
  }*/

  public getArrayPersonas(): FormGroup[] {
    return this.arrayPersonas;
  }

  RegistrarPersonas(usuario: FormGroup) {
    // const data = Object.values(usuario)
    //data.push(usuario)
    //console.log(usuario.value.nombre);

    /*for(let i=0; i< data.length; i++){
      console.log(data[i])
    }*/
    // this.formularioPersona = usuario
    this.arrayPersonas.push(usuario.value);
    console.log('*****************' +  usuario)
  }

  Eliminar(posicion: number) {
    this.getArrayPersonas().splice(posicion, 1);
  }

  onKeyUp(posicion: number, usuario: FormGroup): void {
    const temporal = this.arrayPersonas[posicion];
    //this.formularioPersona.setValue(temporal);
    this.PatchValue(this.formularioPersona);
  }

  PatchValue(persona: FormGroup): void {
    persona.patchValue({
      persona,
    });
    this.formularioPersona = persona;
  }

  mostrarvalores() {
    console.log(
      '***************** mostrar valores' + this.formularioPersona.value.nombre
    );

    console.log('****************')


    for (let i = 0; i < this.arrayPersonas.length; i++) {
      console.log(this.arrayPersonas[i]);
    }

  }


}
