import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servises/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public username: string;
  public password: string;
  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.authToken) {
      this.router.navigateByUrl('/board');
    }
  }

  public login() {
    this.authService.login(this.username, this.password);
  }
}
