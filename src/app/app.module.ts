import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
//import { Usuario } from './interfaces/usuario';
//import { FormGroup, FormControl } from '@angular/forms';



//import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
//import { Validators } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMomentDateModule,

    //Validators,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

