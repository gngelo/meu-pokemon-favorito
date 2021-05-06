
import { LoginService } from './service/login.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokemonFavoritoComponent } from './pokemon-favorito/pokemon-favorito.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonFavoritoComponent,
    PaginaErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    LoginService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
