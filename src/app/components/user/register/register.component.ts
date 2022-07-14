import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    this.userService.signUp(this.user).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('x-access-token', res.token);
        this.router.navigate(['/user']);
      },
      error: (err) => console.log(err),
    });
  }
}
