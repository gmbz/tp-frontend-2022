import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    if (this.userService.isLogged()) {
      return true;
    }
    this.toastr.warning(
      'Debes iniciar sesión para realizar esta acción',
      'Acceso denegado'
    );
    this.router.navigate(['/user/login']);
    return false;
  }
}
