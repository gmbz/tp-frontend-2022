import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  signIn() {
    this.userService.signIn(this.user).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('x-access-token', res.token);
        localStorage.setItem('user-id', res.id);
        this.router.navigate(['/user']);
      },
      error: (err) => console.log(err),
    });
  }
}
