import { PokemonFavoritoComponent } from './pokemon-favorito/pokemon-favorito.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'pokemon-favorito', component: PokemonFavoritoComponent},
  { path: '**', component: PaginaErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
