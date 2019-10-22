import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  public login(username: string, password: string) {
    if (username && password) {
      localStorage.setItem('authToken', username);
      this.router.navigateByUrl('/');
    }
  }

  public logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  public isLogged() {
    return localStorage.getItem('authToken');;
  }
}
