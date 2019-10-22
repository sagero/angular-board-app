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
    }
  }

  public logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
