import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: any) {
    console.log("llego al servicio!!", credentials);
    return new Promise((accept, reject) => {
      if (
        credentials.email === 'andrea@gmail.com'
      ) {
        accept('Credenciales correctas');
      } else {
        reject('Credenciales incorrectas');
      }
    });
  }
}
