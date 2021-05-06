

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class LoginService {

  constructor(protected httpClient: HttpClient) { }


  onSubmit(autentica: any) {
    return this.httpClient.post('http://n31qz.mocklab.io/login', autentica, { headers: {'Content-type': 'application/json'}});
  }

  getMeuPokemon() {
    return this.httpClient.get('http://n31qz.mocklab.io/pokemon/1', { headers: {'Content-type': 'application/json'}});
  }
}
