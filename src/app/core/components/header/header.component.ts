import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/servises/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private authService: AuthService, public router: Router,) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
  }

  logIn() {
    this.router.navigate(['/login']);
  }

  isLogged=this.authService.isLogged();

}
