import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pagina-erro',
  templateUrl: './pagina-erro.component.html',
  styleUrls: ['./pagina-erro.component.scss']
})
export class PaginaErroComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('conponete Pagina de erro foi destruido');
  }

}
