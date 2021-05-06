import { post } from 'selenium-webdriver/http';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-pokemon-favorito',
  templateUrl: './pokemon-favorito.component.html',
  styleUrls: ['./pokemon-favorito.component.scss']
})

export class PokemonFavoritoComponent implements OnInit, OnDestroy {

  responseUsuario: any;
  responseData: any = {};


  constructor(private meuPokemon: LoginService) {  }

  ngOnInit() {

    this.meuPokemon.getMeuPokemon()
    .subscribe(response => {
      this.responseData = response;
      console.log(this.responseData);
    }, error => {
      console.log(error);
    });
    this.responseUsuario = JSON.parse(localStorage.getItem('user'));
  }


  ngOnDestroy() {
    console.log('conponete Pokemon favorito foi destruido');
  }
}
