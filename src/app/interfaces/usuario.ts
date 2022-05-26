import { Component } from '@angular/core';

Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
});

export interface Usuario {
  apellidos: string;
  nombre: string;



  //usuario: Usuario = ;

  /* this.usuario = {
  nombre: '',
  apellidos: '',
  edad: '',
  dni: '',
  cumple: '',
  color_favorito: '',
  sexo: {
    Hombre: 'Hombre',
    Mujer: 'Mujer',
    Otro: 'Otro',
    no_especificado: 'No especificado'

  }


}*/
}
